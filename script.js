const envelope = document.querySelector('.envelope-wrapper');
const heartBtn = document.getElementById('heartBtn');
const music = document.getElementById('valMusic');
const heartContainer = document.getElementById('heartContainer');

// 1. Toggle Envelope Function
function toggleEnvelope() {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        music.play().catch(() => console.log("Waiting for interaction"));
    } else {
        music.pause();
        music.currentTime = 0;
    }
}

heartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleEnvelope();
});

// 2. Infinite Colorful Hearts Generator
function createHeart() {
    const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#c9184a', '#ffccd5', '#9d4edd', '#ffafcc', '#fb6f92'];
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Random settings
    const size = Math.floor(Math.random() * 20) + 10 + "px";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.floor(Math.random() * 100) + "%";
    const duration = Math.random() * 3 + 4 + "s";
    
    heart.style.width = size;
    heart.style.height = size;
    heart.style.backgroundColor = color;
    heart.style.left = left;
    heart.style.animationDuration = duration;
    
    heartContainer.appendChild(heart);
    
    // Remove heart after animation ends to keep site fast
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);
