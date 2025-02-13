document.addEventListener('DOMContentLoaded', function () {
    // Make sure elements are defined inside the DOMContentLoaded event
    const textElement = document.getElementById('glowingText');
    const text = textElement.innerText;
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        newText += `<span>${text[i]}</span>`;
    }
    textElement.innerHTML = newText;

    const mainElement = document.querySelector('.h-main');  // Define mainElement correctly
    const images = [
        "landind-pages/Audi/a-1.jpg",
        "landind-pages/Audi/a-2.jpg",
        "landind-pages/Audi/a-3.jpg",
        "landind-pages/Audi/a-4.jpg",
        "landind-pages/Audi/a-5.jpg",
        "landind-pages/Audi/a-6.jpg",
        "landind-pages/Audi/a-7.jpg",
    ];
    let currentIndex = 0;

    function changeImage() {
        mainElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Simplified increment and wrap-around
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
