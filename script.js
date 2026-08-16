// Fungsi untuk menjalankan jam digital di Status Bar
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Format agar selalu 2 digit (contoh: 09:05)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    clockElement.textContent = `${hours}:${minutes}`;
}

// Update jam setiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali saat dimuat

// Fungsi simulasi membuka aplikasi
function openApp(appName) {
    alert(`Membuka aplikasi: ${appName}\nNantinya kamu bisa mengarahkan ini ke halaman HTML lain atau memunculkan modal window.`);
}
