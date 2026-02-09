const envelope = document.querySelector('.envelope-wrapper');
const heartBtn = document.getElementById('heartBtn');
const innerClose = document.getElementById('innerClose');
const music = document.getElementById('valMusic');
const video = document.getElementById('valVideo'); // Select the video

function toggleEnvelope() {
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        music.play();
        video.play(); // Video starts when opened
        video.muted = false; // Unmutes video if you want the video sound too
    } else {
        music.pause();
        music.currentTime = 0; 
        video.pause(); // Video stops when closed
        video.currentTime = 0;
    }
}

heartBtn.addEventListener('click', toggleEnvelope);
innerClose.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleEnvelope();
});
