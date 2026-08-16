// Mengatur Jam Real-time
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    clockElement.textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Elemen Jendela Aplikasi
const appWindow = document.getElementById('app-window');
const windowTitle = document.getElementById('window-title');
const appFrame = document.getElementById('app-frame');

// Fungsi Membuka Aplikasi
function openApp(appName, appUrl) {
    windowTitle.textContent = appName;
    appFrame.src = appUrl; // Memuat file HTML atau link ke dalam iframe
    
    appWindow.classList.remove('hidden');
    // Sedikit jeda agar transisi CSS terbaca
    setTimeout(() => {
        appWindow.classList.add('active');
    }, 10);
}

// Fungsi Menutup Aplikasi
function closeApp() {
    appWindow.classList.remove('active');
    
    // Tunggu animasi selesai baru sembunyikan dan kosongkan iframe
    setTimeout(() => {
        appWindow.classList.add('hidden');
        appFrame.src = ""; 
    }, 400); 
}
