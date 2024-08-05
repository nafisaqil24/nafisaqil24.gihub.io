// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const envelope = document.getElementById('enveLope');
    
    // Tambahkan event listener untuk klik
    envelope.addEventListener('click', () => {
        // Tambahkan kelas yang mengaktifkan animasi
        envelope.classList.toggle('animate-background');
    });
});
