const envelope = document.querySelector('.envelope-wrapper');
const heartBtn = document.getElementById('heartBtn');
const music = document.getElementById('valMusic');

// Function to handle opening and closing
function toggleEnvelope() {
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        // .play() returns a promise, so we handle it to avoid console errors
        music.play().catch(error => {
            console.log("Audio playback waiting for user interaction.");
        });
    } else {
        music.pause();
        music.currentTime = 0; // Optional: Resets song to the beginning
    }
}

// Single event listener for the heart button
heartBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents issues on some mobile browsers
    toggleEnvelope();
});

// Optional: Clicking the envelope body also toggles it
envelope.addEventListener('click', (e) => {
    if (e.target !== heartBtn) {
        toggleEnvelope();
    }
});
