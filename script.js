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

// 2. Click Event
heartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleEnvelope();
});

// 3. Infinite Colorful Hearts Generator
function createHeart() {
    const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#c9184a', '#ffccd5', '#9d4edd', '#ffafcc', '#fb6f92'];
    const heart = document.createElement('div');
    
    heart.classList.add('floating-heart');
    
    // Random settings (Fixed the syntax error here)
    const sizeValue = Math.floor(Math.random() * 20) + 15; 
    const size = sizeValue + "px";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.floor(Math.random() * 100) + "%";
    const duration = Math.random() * 3 + 5 + "s"; 
    
    // Apply styles
    heart.style.width = size;
    heart.style.height = size;
    heart.style.backgroundColor = color;
    heart.style.left = left;
    heart.style.animationDuration = duration;
    
    // Clean SVG heart shape
    heart.style.clipPath = "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')";
    
    heartContainer.appendChild(heart);
    
    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create a new heart every 400ms
setInterval(createHeart, 400);
