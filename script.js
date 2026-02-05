const envelope = document.querySelector('.envelope-wrapper');
const heartBtn = document.getElementById('heartBtn');
const innerClose = document.getElementById('innerClose');
const music = document.getElementById('valMusic');

function toggleEnvelope() {
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0; // Reset music to start
    }
}

heartBtn.addEventListener('click', toggleEnvelope);
innerClose.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents double-triggering
    toggleEnvelope();
});