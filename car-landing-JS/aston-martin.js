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
        "landind-pages/Aston-Martin/a-2.jpg",
        "landind-pages/Aston-Martin/a-3.jpg",
        "landind-pages/Aston-Martin/a-4.jpg",
        "landind-pages/Aston-Martin/a-5.jpg",
        "landind-pages/Aston-Martin/a-6.jpg",
        "landind-pages/Aston-Martin/a-7.jpg"
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

// this down is for the h-header

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                document.querySelectorAll('.h-header div').forEach(div => {
                    if (div.dataset.target === targetId) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold to when you consider the section "active"

    // Observe each section
    document.querySelectorAll('.car-section').forEach(section => {
        observer.observe(section);
    });
});



