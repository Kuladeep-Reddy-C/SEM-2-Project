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
        "landind-pages/lambo-home-page/lambo-1.jpg",
        "landind-pages/lambo-home-page/lambo-2.jpg",
        "landind-pages/lambo-home-page/lambo-3.jpg",
        "landind-pages/lambo-home-page/lambo-4.jpg",
        "landind-pages/lambo-home-page/lambo-5.jpg",
        "landind-pages/lambo-home-page/lambo.webp",
    ];
    let currentIndex = 0;

    function changeImage() {
        mainElement.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Simplified increment and wrap-around
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

  }



// thisis for elements with class-hidden will be a part of reveal on scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{entry.target.classList.remove('show');}
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));