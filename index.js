  const express = require('express');
  const http = require('http');
  const socketIo = require('socket.io');
  const multer = require('multer');
  const path = require('path');
  const fs = require('fs');

  const app = express();
  const server = http.createServer(app);
  const io = socketIo(server);


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads/';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });

  const upload = multer({ 
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024 
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx|mp4|avi|mov/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);
      
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        cb(new Error('File type not allowed'));
      }
    }
  });


  app.use(express.static('public'));
  app.use('/uploads', express.static('uploads'));
  app.use(express.json());


  const activeUsers = new Map();
  const conversations = new Map();


  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });


  app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ 
      url: fileUrl,
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype
    });
  });


  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);


    socket.on('join', (phoneNumber) => {
      socket.phoneNumber = phoneNumber;
      activeUsers.set(phoneNumber, socket.id);
      socket.join(phoneNumber);
      
      console.log(`User ${phoneNumber} joined with socket ${socket.id}`);
      

      socket.broadcast.emit('user_status', {
        phoneNumber: phoneNumber,
        status: 'online'
      });
    });


    socket.on('send_message', (data) => {
      const { to, message, from, messageId, timestamp } = data;
      

      const conversationKey = [from, to].sort().join('-');
      if (!conversations.has(conversationKey)) {
        conversations.set(conversationKey, []);
      }
      
      const messageData = {
        id: messageId,
        from: from,
        to: to,
        message: message,
        timestamp: timestamp,
        type: 'text',
        status: 'sent'
      };
      
      conversations.get(conversationKey).push(messageData);
      

      const recipientSocketId = activeUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('receive_message', messageData);
        

        socket.emit('message_delivered', {
          messageId: messageId,
          to: to,
          timestamp: new Date().toISOString()
        });
      }
      
      console.log(`Message from ${from} to ${to}: ${message}`);
    });


    socket.on('send_file', (data) => {
      const { to, fileData, from, messageId, timestamp } = data;
      
      const conversationKey = [from, to].sort().join('-');
      if (!conversations.has(conversationKey)) {
        conversations.set(conversationKey, []);
      }
      
      const fileMessage = {
        id: messageId,
        from: from,
        to: to,
        fileData: fileData,
        timestamp: timestamp,
        type: 'file',
        status: 'sent'
      };
      
      conversations.get(conversationKey).push(fileMessage);
      

      const recipientSocketId = activeUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('receive_file', fileMessage);
        
  
        socket.emit('file_delivered', {
          messageId: messageId,
          to: to,
          timestamp: new Date().toISOString()
        });
      }
      
      console.log(`File from ${from} to ${to}: ${fileData.originalname}`);
    });

  
    socket.on('typing_start', (data) => {
      const { to, from } = data;
      const recipientSocketId = activeUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('user_typing', { from: from, typing: true });
      }
    });

    socket.on('typing_stop', (data) => {
      const { to, from } = data;
      const recipientSocketId = activeUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('user_typing', { from: from, typing: false });
      }
    });

  
    socket.on('message_read', (data) => {
      const { messageId, from, to } = data;
      const senderSocketId = activeUsers.get(from);
      if (senderSocketId) {
        io.to(senderSocketId).emit('message_read_receipt', {
          messageId: messageId,
          readBy: to,
          readAt: new Date().toISOString()
        });
      }
    });

    
    socket.on('get_conversation', (data) => {
      const { user1, user2 } = data;
      const conversationKey = [user1, user2].sort().join('-');
      const messages = conversations.get(conversationKey) || [];
      
      socket.emit('conversation_history', {
        messages: messages,
        participants: [user1, user2]
      });
    });

    
    socket.on('send_location', (data) => {
      const { to, location, from, messageId, timestamp } = data;
      
      const conversationKey = [from, to].sort().join('-');
      if (!conversations.has(conversationKey)) {
        conversations.set(conversationKey, []);
      }
      
      const locationMessage = {
        id: messageId,
        from: from,
        to: to,
        location: location,
        timestamp: timestamp,
        type: 'location',
        status: 'sent'
      };
      
      conversations.get(conversationKey).push(locationMessage);
      
    
      const recipientSocketId = activeUsers.get(to);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('receive_location', locationMessage);
      }
    });

    
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
      
      if (socket.phoneNumber) {
        activeUsers.delete(socket.phoneNumber);
        
    
        socket.broadcast.emit('user_status', {
          phoneNumber: socket.phoneNumber,
          status: 'offline'
        });
      }
    });
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Open http://localhost:${PORT} to access the app`);
  });