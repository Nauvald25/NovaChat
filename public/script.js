// fiur di bawah //
//---------------------------------------------------------//
// function toggleAttachMenu() {
//     const menu = document.getElementById("attach-menu");
//     menu.style.display = menu.style.display === "flex" ? "none" : "flex";
//   }
  
//   document.addEventListener("click", function(event) {
//     const attach = document.querySelector(".attach-menu");
//     const button = document.querySelector(".input-area button");
//     if (!attach.contains(event.target) && !button.contains(event.target)) {
//       attach.style.display = "none";
//     }
//   });
  
//   function openCamera() {
//     document.getElementById("cameraInput").click();
//   }
//   document.getElementById("cameraInput").addEventListener("change", function(event) {
//     if (event.target.files.length > 0) {
//       alert("Kamera menangkap foto: " + event.target.files[0].name);
//     }
//   });
  
//   function openGallery() {
//     document.getElementById("galleryInput").click();
//   }
//   document.getElementById("galleryInput").addEventListener("change", function(event) {
//     if (event.target.files.length > 0) {
//       alert("Foto dipilih: " + event.target.files[0].name);
//     }
//   });
  
//   function openDocument() {
//     document.getElementById("docInput").click();
//   }
//   document.getElementById("docInput").addEventListener("change", function(event) {
//     if (event.target.files.length > 0) {
//       alert("Dokumen dipilih: " + event.target.files[0].name);
//     }
//   });
  
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
//         alert(`Lokasi Anda: ${mapsLink}`);
//       }, function(error) {
//         alert("Gagal mendapatkan lokasi: " + error.message);
//       });
//     } else {
//       alert("Geolocation tidak didukung browser Anda.");
//     }
//   }
  
//   document.getElementById("send-btn").addEventListener("click", function() {
//     const number = document.getElementById("wa-number").value.trim();
//     const message = document.getElementById("chat-message").value.trim();
//     if(!number) {
//       alert("Masukkan nomor WhatsApp dulu.");
//       return;
//     }
//     alert(`Pesan sudah dikirim ke ${number}`);
//     const waLink = `https://api.whatsapp.com/send?phone=${number.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`;
//     window.open(waLink, "_blank");
//   });
  
//   function callNumber() {
//     const number = document.getElementById("wa-number").value.trim();
//     if(!number) {
//       alert("Masukkan nomor telepon dulu.");
//       return;
//     }
//     alert(`Sedang menelpon ${number}...`);
//     window.location.href = `tel:${number}`;
//   }
  
//   function videoCall() {
//     const number = document.getElementById("wa-number").value.trim();
//     if(!number) {
//       alert("Masukkan nomor telepon dulu.");
//       return;
//     }
//     alert(`Memulai video call dengan ${number} (simulasi)...`);
//   }
  //-------------------------------------------------------------------//
// fitur 2 di bwah //
// function toggleAttachMenu() {
//   const menu = document.getElementById("attach-menu");
//   if (menu) menu.style.display = (menu.style.display === "flex" ? "none" : "flex");
// }
// document.addEventListener("click", function (event) {
//   const attach = document.getElementById("attach-menu");
//   const button = document.querySelector(".attach-button");
//   if (attach && !attach.contains(event.target) && !button?.contains(event.target)) {
//     attach.style.display = "none";
//   }
// });


// const chatBox = document.getElementById("chat-box");
// const messageInput = document.getElementById("chat-message");
// const typingStatus = document.getElementById("typing-status");

// messageInput?.addEventListener("input", function () {
//   typingStatus.style.display = messageInput.value.trim() !== "" ? "block" : "none";
// });
// const socket = io();

// document.getElementById("send-btn")?.addEventListener("click", function () {
//   const number = document.getElementById("wa-number").value.trim();
//   const message = messageInput.value.trim();

//   if (!number) return alert("Masukkan nomor tujuan dulu.");
//   if (!message) return alert("Masukkan pesan.");

//   const linkNumber = `<a href="javascript:void(0)" onclick="openTargetWA('${number}')">${number}</a>`;
//   appendMessage(`${message}<br><small style="color:#888;">✅ Pesan sudah dikirim ke ${linkNumber}, mohon ditunggu...</small>`, "user");

//   messageInput.value = "";
//   typingStatus.style.display = "none";
//   playNotify();
//   saveChat();

//   setTimeout(() => {
//     autoReply(`Terima kasih, pesan Anda ke <strong>${number}</strong> sudah kami terima 🙏 Mohon ditunggu ya.`);
//   }, 1000);
// });


// function openTargetWA(number) {
//   alert(`Anda sedang chat dengan nomor ${number}`);
//   const waUrl = `https://api.whatsapp.com/send?phone=${number.replace(/\D/g, '')}`;
//   window.open(waUrl, "_blank");
// }


// function handleInputChange(inputId, callback) {
//   document.getElementById(inputId)?.addEventListener("change", e => {
//     if (e.target.files.length > 0) callback(e.target.files[0]);
//   });
// }

// function openCamera() { document.getElementById("cameraInput")?.click(); }
// handleInputChange("cameraInput", file => showPreview(file, "Foto dari Kamera", "gambar"));

// function openGallery() { document.getElementById("galleryInput")?.click(); }
// handleInputChange("galleryInput", file => showPreview(file, "Foto dari Galeri", "gambar"));

// function openDocument() { document.getElementById("docInput")?.click(); }
// handleInputChange("docInput", showPreviewDoc);

// function openVideo() { document.getElementById("videoInput")?.click(); }
// handleInputChange("videoInput", showPreviewVideo);


// function getLocation() {
//   if (!navigator.geolocation) return alert("Geolocation tidak didukung browser Anda.");
//   navigator.geolocation.getCurrentPosition(pos => {
//     const lat = pos.coords.latitude;
//     const lon = pos.coords.longitude;
//     const link = `https://www.google.com/maps?q=${lat},${lon}`;
//     appendMessage(`📍 Lokasi Anda: <a href="${link}" target="_blank">${link}</a>`, "user", true);
//     playNotify();
//     saveChat();
//     setTimeout(() => autoReply("Terima kasih sudah share lokasi Anda 📍, akan kami tindak lanjuti."), 1000);
//   }, err => alert("Gagal mendapatkan lokasi: " + err.message));
// }


// function showPreview(file, label, type) {
//   const reader = new FileReader();
//   reader.onload = e => {
//     appendMessage(`${label}<br><img src="${e.target.result}" style="max-width:120px;border-radius:5px;">`, "user", true);
//     playNotify();
//     saveChat();
//     setTimeout(() => {
//       autoReply(`Terima kasih sudah upload ${type === "gambar" ? "gambar" : "file"}, mohon ditunggu ya 🙌`);
//     }, 1000);
//   };
//   reader.readAsDataURL(file);
// }

// function showPreviewDoc(file) {
//   appendMessage(`📄 Dokumen: ${file.name}`, "user", true);
//   playNotify();
//   saveChat();
//   setTimeout(() => {
//     autoReply(`Terima kasih sudah upload dokumen "${file.name}", akan kami cek segera 📄`);
//   }, 1000);
// }

// function showPreviewVideo(file) {
//   const reader = new FileReader();
//   reader.onload = e => {
//     appendMessage(`🎬 Video:<br><video controls style="max-width:160px;border-radius:5px;">
//       <source src="${e.target.result}" type="${file.type}">
//       Your browser does not support video tag.
//     </video>`, "user", true);
//     playNotify();
//     saveChat();
//     setTimeout(() => {
//       autoReply(`Terima kasih sudah upload video, akan kami proses segera 🎥`);
//     }, 1000);
//   };
//   reader.readAsDataURL(file);
// }


// function appendMessage(text, type, isSpecial = false) {
//   const div = document.createElement("div");
//   div.className = `message ${type}`;
//   const time = new Date();
//   const hh = time.getHours().toString().padStart(2, "0");
//   const mm = time.getMinutes().toString().padStart(2, "0");
//   div.innerHTML = `
//     <div style="position:relative;">
//       <button onclick="deleteMessage(this.parentElement.parentElement)"
//         style="display:none;position:absolute;top:-5px;right:-5px;
//         background:#fff;border:1px solid #ccc;border-radius:50%;cursor:pointer;font-size:12px;">
//         🗑️
//       </button>
//       <p>${text}</p>
//       <small>${hh}:${mm}</small>
//     </div>
//   `;
//   div.addEventListener("mouseenter", () => {
//     div.querySelector("button").style.display = "block";
//   });
//   div.addEventListener("mouseleave", () => {
//     div.querySelector("button").style.display = "none";
//   });
//   chatBox.appendChild(div);
//   chatBox.scrollTop = chatBox.scrollHeight;
//   if (isSpecial) saveChat();
// }


// function autoReply(text) {
//   typingStatus.style.display = "block";
//   setTimeout(() => {
//     typingStatus.style.display = "none";
//     appendMessage(text, "admin");
//     playNotify();
//     saveChat();
//   }, 1000);
// }


// function playNotify() {
//   const audio = document.getElementById("notify-sound");
//   if (audio) audio.play();
// }
// function saveChat() {
//   localStorage.setItem("chat-history", chatBox.innerHTML);
// }
// window.onload = () => {
//   if (localStorage.getItem("chat-history")) {
//     chatBox.innerHTML = localStorage.getItem("chat-history");
//   }
// };


// function callNumber() {
//   const number = document.getElementById("wa-number").value.trim();
//   if (!number) return alert("Masukkan nomor telepon dulu.");
//   window.location.href = `tel:${number.replace(/\D/g, '')}`;
// }
// function videoCall() {
//   const number = document.getElementById("wa-number").value.trim();
//   if (!number) return alert("Masukkan nomor telepon dulu.");
//   window.open(`https://wa.me/${number.replace(/\D/g, '')}`, "_blank");
// }


// function deleteMessage(elem) {
//   elem.remove();
//   saveChat();
// }
// function clearAllChat() {
//   if (confirm("Yakin ingin menghapus semua chat?")) {
//     chatBox.innerHTML = "";
//     localStorage.removeItem("chat-history");
//   }

let messages = [];

function formatNumber(number) {
    let n = number.trim().replace(/[\s-]/g, "");
    if (n.startsWith("08")) n = "62" + n.slice(1);
    else if (n.startsWith("+62")) n = "62" + n.slice(3);
    return n.replace(/\D/g, "");
}

function openWhatsApp(msgOrUrl) {
    const num = formatNumber(document.getElementById("wa-number").value);
    if (!num) return alert("Masukkan nomor WhatsApp dulu.");
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msgOrUrl)}`, "_blank");
}


function getFormattedDate(date) {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return "Hari Ini";
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "Kemarin";
    } else {
        return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
    }
}

const chatBox = document.getElementById("chat-box");
const msgIn = document.getElementById("chat-message");
const typing = document.getElementById("typing-status");
const sendBtn = document.getElementById("send-btn");
const socket = window.io ? io() : { emit: () => {} };


const scrollToBottomBtn = document.getElementById("scroll-to-bottom-btn");


msgIn?.addEventListener("input", () => {
    typing.style.display = msgIn.value.trim() ? "block" : "none";
});


function renderChat() {
    chatBox.innerHTML = ''; 
    let lastRenderedDate = null;

    messages.forEach(msg => {
        const messageDate = new Date(msg.timestamp);

        
        if (lastRenderedDate === null || messageDate.toDateString() !== lastRenderedDate.toDateString()) {
            const separatorDiv = document.createElement("div");
            separatorDiv.className = "date-separator";
            separatorDiv.innerHTML = `<span>${getFormattedDate(messageDate)}</span>`;
            chatBox.appendChild(separatorDiv);
            lastRenderedDate = messageDate;
        }

        const div = document.createElement("div");
        div.className = `message ${msg.who}`;
        div.setAttribute('data-id', msg.id); 
        div.setAttribute('data-timestamp', msg.timestamp); 

        const timeString = `${messageDate.getHours().toString().padStart(2, "0")}:${messageDate.getMinutes().toString().padStart(2, "0")}`;

        const deleteButtonHtml = (msg.who === "user") ?
            `<button onclick="deleteMessage('${msg.id}')"
                   style="display:none;position:absolute;top:-5px;right:-5px;
                          background:#fff;border:1px solid #ccc;border-radius:50%;
                          cursor:pointer;font-size:12px;width:20px;height:20px;
                          display:flex;justify-content:center;align-items:center;">🗑️</button>` : '';

        div.innerHTML = `
            <div style="position:relative;">
                ${deleteButtonHtml}
                <p>${msg.html}</p>
                <small>${timeString}</small>
            </div>`;

        if (msg.who === "user") {
            
            div.addEventListener("mouseenter", () => {
                const button = div.querySelector("button");
                if (button) button.style.display = "flex";
            });
            div.addEventListener("mouseleave", () => {
                const button = div.querySelector("button");
                if (button) button.style.display = "none";
            });
        }
        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight; 
    localStorage.setItem("chat-history", JSON.stringify(messages)); 
    checkScrollButtonVisibility(); 
}


function addMessage(html, who = "user", type = "text") {
    const id = Date.now();
    const timestamp = new Date().toISOString();

    messages.push({ id, html, who, type, timestamp });
    renderChat(); 
    document.getElementById("notify-sound")?.play();
}


window.addEventListener("load", () => {
    const h = localStorage.getItem("chat-history");
    if (h) {
        try {
            messages = JSON.parse(h);
            
            messages = messages.filter(msg => !(msg.who === 'admin' && msg.html.includes('Halo! Selamat datang di layanan chat kami.')));
            renderChat(); 
        } catch (e) {
            console.error("Failed to parse chat history from localStorage:", e);
            messages = [];
        }
    }

    
    if (messages.length === 0) {
        addMessage(`Halo! Selamat datang di NovaChat layanan chat kami.<br>Silakan masukkan nomor WhatsApp Anda (contoh: +6285772001406) agar kami dapat menghubungi Anda lebih cepat.`, 'admin');
    }
    chatBox.scrollTop = chatBox.scrollHeight; 
    checkScrollButtonVisibility(); 
});



function deleteMessage(messageId) {
    if (confirm("Yakin ingin menghapus pesan ini?")) {
        messages = messages.filter(msg => msg.id != messageId); 
        renderChat(); 
    }
}

function autoReply(text) {
    typing.style.display = "block";
    setTimeout(() => {
        typing.style.display = "none";
        addMessage(text, "admin"); 
    }, 1000);
}

sendBtn.addEventListener("click", () => {
    const num = formatNumber(document.getElementById("wa-number").value);
    const msg = msgIn.value.trim();
    if (!num) return alert("Masukkan nomor tujuan.");
    if (!msg) return alert("Masukkan pesan.");


    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, "_blank");

    
    addMessage(`${msg}<br><small style="color:#888">✅ Kirim di WhatsApp: <a href="javascript:openTargetWA('${num}')">${num}</a></small>`, 'user');
    socket.emit("chat message", msg); 

    msgIn.value = ""; 
    typing.style.display = "none"; 

    
    setTimeout(() => processUserMessageAndReply(msg), 1000);
});


function clearAllChat() {
    if (confirm("Yakin ingin menghapus semua pesan chat?")) {
        messages = [];
        renderChat(); 
    }
}


socket.on("chat message", (m) => addMessage(m, "admin"));
socket.on("file upload", (f) => addMessage(f, "admin"));

function toggleAttachMenu() {
    const menu = document.getElementById("attach-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";

    document.getElementById("emoji-menu").style.display = "none";
    document.getElementById("quick-reply-menu").style.display = "none";
}

function setupFile(id, cb) {
    document.getElementById(id).addEventListener("change", (e) => {
        if (e.target.files[0]) {
            cb(e.target.files[0]);
            toggleAttachMenu(); 
        }
    });
}

function openCamera() { document.getElementById("cameraInput").click(); }
function openGallery() { document.getElementById("galleryInput").click(); }
function openDocument() { document.getElementById("docInput").click(); }
function openVideo() { document.getElementById("videoInput").click(); }


setupFile("cameraInput", (file) => uploadAndShare(file, "📷 Foto dari Kamera", "gambar"));
setupFile("galleryInput", (file) => uploadAndShare(file, "🖼️ Foto dari Galeri", "gambar"));
setupFile("docInput", (file) => uploadAndShare(file, "📄 Dokumen", "dokumen"));
setupFile("videoInput", (file) => uploadAndShare(file, "🎬 Video", "video"));


async function uploadAndShare(file, label, type) {
    let fileUrl = null;
    try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data && data.url) {
            fileUrl = window.location.origin + data.url;
        }
    } catch (e) {
        console.warn("Backend upload failed or not available:", e);
        fileUrl = URL.createObjectURL(file);
    }

    // Add message with file preview or link
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const messageHtml = `${label}:<br><img src="${e.target.result}" style="max-width:120px;border-radius:5px;">`;
            addMessage(messageHtml, 'user', 'image');
        };
        reader.readAsDataURL(file);
    } else if (file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const messageHtml = `${label}:<br><video controls src="${e.target.result}" style="max-width:160px;border-radius:5px;"></video>`;
            addMessage(messageHtml, 'user', 'video');
        };
        reader.readAsDataURL(file);
    } else {
        const messageHtml = `${label}: ${file.name}`;
        addMessage(messageHtml, 'user', 'document');
    }

    socket.emit("file upload", file.name);

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({
                files: [file],
                title: `Kirim ${type}`,
                text: `Ini ${type} saya kirim: ${file.name}`
            });
        } catch (error) {
            console.error("Web Share API failed:", error);
            openWhatsApp(`Halo, saya kirim ${type}: ${fileUrl || file.name}`);
        }
    } else {
        openWhatsApp(`Halo, saya kirim ${type}: ${fileUrl || file.name}`);
    }

    setTimeout(() => autoReply(`Terima kasih sudah kirim ${type}, mohon ditunggu 🙏`), 1000);
}


function getLocation() {
    if (!navigator.geolocation) {
        return alert("Browser tidak mendukung geolocation.");
    }
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const link = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        addMessage(`📍 Lokasi: <a href="${link}" target="_blank">${link}</a>`, 'user', 'location');
        socket.emit("file upload", "lokasi");
        openWhatsApp(`Ini lokasi saya: ${link}`);
        setTimeout(() => autoReply("Terima kasih sudah share lokasi 📍, mohon tunggu"), 1000);
        toggleAttachMenu();
    }, (err) => {
        alert("Gagal mendapatkan lokasi: " + err.message + ". Pastikan Anda menggunakan HTTPS.");
        console.error("Geolocation Error:", err);
        toggleAttachMenu();
    });
}

function openTargetWA(num) {
    window.open(`https://wa.me/${formatNumber(num)}`, "_blank");
}

function callNumber() {
    const n = formatNumber(document.getElementById("wa-number").value);
    if (!n) return alert("Masukkan nomor telepon dulu.");
    window.location.href = `tel:${n}`;
}

function videoCall() {
    const n = formatNumber(document.getElementById("wa-number").value);
    if (!n) return alert("Masukkan nomor telepon dulu.");
    if (confirm("Fungsi video call langsung tidak didukung melalui web browser. Ini akan membuka chat WhatsApp dengan nomor tersebut. Lanjutkan?")) {
        window.open(`https://wa.me/${n}`, "_blank");
    }
}

function toggleEmojiMenu() {
    const menu = document.getElementById("emoji-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    document.getElementById("attach-menu").style.display = "none";
    document.getElementById("quick-reply-menu").style.display = "none";
}

function insertEmoji(emoji) {
    const msgInput = document.getElementById("chat-message");
    if (msgInput) {
        msgInput.value += emoji;
        msgInput.focus();
    }
    toggleEmojiMenu();
}

function toggleQuickReplyMenu() {
    const menu = document.getElementById("quick-reply-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    document.getElementById("attach-menu").style.display = "none";
    document.getElementById("emoji-menu").style.display = "none";
}

function insertQuickReply(text) {
    const msgInput = document.getElementById("chat-message");
    if (msgInput) {
        msgInput.value = text;
        msgInput.focus();
    }
    toggleQuickReplyMenu();
}

function processUserMessageAndReply(userMessage) {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Pagi";
    } else if (hour >= 12 && hour < 15) {
        greeting = "Siang";
    } else if (hour >= 15 && hour < 18) {
        greeting = "Sore";
    } else {
        greeting = "Malam";
    }

    let replyText = "";
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("halo") || lowerCaseMessage.includes("hai") || lowerCaseMessage.includes("hi")) {
        replyText = `Halo juga! Selamat ${greeting}, Kak. Ada yang bisa kami bantu?`;
    } else if (lowerCaseMessage.includes("terima kasih") || lowerCaseMessage.includes("makasih")) {
        replyText = `Sama-sama, Kak. Selamat ${greeting} kembali! Kami senang bisa membantu!`;
    } else if (lowerCaseMessage.includes("jam berapa")) {
        replyText = `Saat ini pukul ${now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}, Kak.`;
    } else if (lowerCaseMessage.includes("buka jam berapa") || lowerCaseMessage.includes("jam operasional")) {
        replyText = `Kami buka setiap hari dari jam 08:00 sampai 20:00 WIB. Selamat ${greeting}!`;
    } else if (lowerCaseMessage.includes("harga") || lowerCaseMessage.includes("biaya")) {
        replyText = `Untuk informasi harga atau biaya, silakan sebutkan produk/layanan yang Anda minati ya, Kak. Selamat ${greeting}!`;
    } else if (lowerCaseMessage.includes("lokasi")) {
        replyText = `Kami berlokasi di Ciomas, West Java, Indonesia. Untuk lokasi tepatnya, bisa klik ikon lokasi di menu lampiran ya. Selamat ${greeting}!`;
    } else if (lowerCaseMessage.includes("apa kabar")) {
        replyText = `Kabar baik, Kak! Semoga Anda juga baik-baik saja. Selamat ${greeting}!`;
    }
    else {
        replyText = `Selamat ${greeting}, Kak. Pesan Anda "${userMessage}" sudah kami terima. Mohon ditunggu ya, kami akan segera membalas. 🙏`;
    }

    autoReply(replyText);
}

function checkScrollButtonVisibility() {
    if (chatBox.scrollHeight - chatBox.scrollTop > chatBox.clientHeight + 50) {
        scrollToBottomBtn.classList.add('visible');
    } else {
        scrollToBottomBtn.classList.remove('visible');
    }
}


chatBox.addEventListener('scroll', checkScrollButtonVisibility);


scrollToBottomBtn.addEventListener('click', () => {
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: 'smooth' 
    });
});

document.addEventListener("click", (e) => {
    const attachMenu = document.getElementById("attach-menu");
    const attachButton = document.querySelector(".attach-button");
    const emojiMenu = document.getElementById("emoji-menu");
    const emojiButton = document.querySelector(".emoji-button");
    const quickReplyMenu = document.getElementById("quick-reply-menu");
    const quickReplyButton = document.querySelector(".quick-reply-toggle-button");

    if (attachMenu && !attachMenu.contains(e.target) && attachButton && !attachButton.contains(e.target)) {
        attachMenu.style.display = "none";
    }
    if (emojiMenu && !emojiMenu.contains(e.target) && emojiButton && !emojiButton.contains(e.target)) {
        emojiMenu.style.display = "none";
    }
    if (quickReplyMenu && !quickReplyMenu.contains(e.target) && quickReplyButton && !quickReplyButton.contains(e.target)) {
        quickReplyMenu.style.display = "none";
    }
});