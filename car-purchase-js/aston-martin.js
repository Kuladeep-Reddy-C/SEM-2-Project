

function startSlideshow(slideShowId) {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.querySelectorAll('#' + slideShowId + ' .mySlides');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}

// Initialize both slideshows
startSlideshow('slideshow1');
startSlideshow('slideshow2');
startSlideshow('slideshow3');



document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.spec-matter');
    const speed = 200; // The lower the speed, the faster the count

    counters.forEach((counter, index) => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;

            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setTimeout(animate, 400 * index); // Delay animation based on index
                    observer.unobserve(counter);
                }
            });
        }, {threshold: 0.5});
        
        observer.observe(counter);
    });
});

function order()
{
    document.querySelector('.buy').style.display = "flex";
    let value1 = document.querySelector('.seat-title').innerHTML;
    let value2 = document.querySelector('.js-ext-title').innerHTML;
    document.querySelector('.chose-matter-1').innerHTML = `with the interior : ${value1}`;
    document.querySelector('.chose-matter-2').innerHTML = `with the Exterior : ${value2}`;
    document.querySelector('.fall-img1').src  = document.querySelector('.inte-seatz-img').src ;
    document.querySelector('.fall-img2').src  = document.querySelector('.js-ext-img').src ; 
}

function shortlisted()
{
    localStorage.setItem('aston-martin-1','true');
}


// This function toggles the display of specifications on button click
function f1() {
    const allSpecs = document.querySelector('.all-spec');
    const specButton = document.querySelector('.spec-button');
    if (allSpecs.style.display === "block") {
        allSpecs.style.display = "none";
        specButton.innerHTML = 'See All The Specifications';
    } else {
        allSpecs.style.display = "block";
        specButton.innerHTML = 'See Less Specifications';
    }
}

// This function toggles the display of details sections on button click
function f2(className) {
    const detailsDiv = document.querySelector(`.${className}`);
    detailsDiv.style.display = detailsDiv.style.display === "flex" ? "none" : "flex";
}

// Updates the content and image based on the selected interior color
function updateInterior(button, title, imagePath, description) {
    document.querySelector('.seat-title').innerHTML = title;
    document.querySelector('.inte-seat-img').src = imagePath;
    document.querySelector('.seat-matter').innerHTML = description;
    selectButton(button);
}

// Updates the content and image based on the selected exterior color
function updateExterior(button, title, imagePath, description) {
    document.querySelector('.js-ext-title').innerHTML = title;
    document.querySelector('.js-ext-img').src = imagePath;
    document.querySelector('.js-ext-matter').innerHTML = description;
    selectButton(button);
}

// Handles selection of buttons by applying 'selected' class
function selectButton(selectedButton) {
    document.querySelectorAll('.butt button').forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}

// Interior color selection functions
function orange(button) {
    updateInterior(button, 'Synapse Orange', 'landind-pages/Aston-Martin/cars/2025-aston-martin-dbx707-interior-seats.jpg', "Embrace the boldness of orange seats, where every drive is charged with enthusiasm and energy");
}

function pada(button) {
    updateInterior(button, 'Burning Brown', 'landind-pages/Aston-Martin/cars/inte-color-2.jpg', 'Select light brown seats for a touch of timeless elegance that combines comfort with classic style.');
}

function black(button) {
    updateInterior(button, 'Cool Black', 'landind-pages/Aston-Martin/cars/inte-color-3.jpg', "Opt for black seats to anchor your vehicle's interior with a look that's as sleek as it is sophisticated.");
}

function white(button) {
    updateInterior(button, 'Pleasant White', 'landind-pages/Aston-Martin/cars/inte-color-4.jpg', "Choose white seats for a crisp, clean aesthetic that reflects sophistication and modern luxury in every mile.");
}

// Exterior color selection functions
function titaniumGrey(button) {
    updateExterior(button, "Titanium Grey", 'landind-pages/Aston-Martin/cars/Titanium-Grey.jpg', "Experience the sleek sophistication of Titanium Grey.");
}

function lightningSilver(button) {
    updateExterior(button, "Lightning Silver", 'landind-pages/Aston-Martin/cars/Lightning-Silver.jpg', "Dazzle with the reflective elegance of Lightning Silver.");
}

function jetBlack(button) {
    updateExterior(button, "Jet Black", 'landind-pages/Aston-Martin/cars/Jet-Black.jpg', "Embrace the timeless appeal of Jet Black.");
}

function titaniumMagneticSilver(button) {
    updateExterior(button, "Magnetic Silver", 'landind-pages/Aston-Martin/cars/Magnetic-Silver.jpg', "Go bold with the Magnetic Silver that stands out.");
}

function forestGreen(button) {
    updateExterior(button, "Forest Green", 'landind-pages/Aston-Martin/cars/Forest-Green.jpg', "Connect with nature with the deep hues of Forest Green.");
}

function glassBlue(button) {
    updateExterior(button, "Glass Blue", 'landind-pages/Aston-Martin/cars/Glass-Blue.jpg', "Cool and calming, Glass Blue offers tranquility.");
}

function ultramarineBlack(button) {
    updateExterior(button, "Ultramarine Black", 'landind-pages/Aston-Martin/cars/Ultramarine-Black.jpg', "Deep and intense, Ultramarine Black is profoundly stylish.");
}

function currantGreen(button) {
    updateExterior(button, "Currant Green", 'landind-pages/Aston-Martin/cars/Currant-Green.jpg', "Vibrant and energetic, Currant Green invigorates your drive.");
}

// Initial setup to select the first button on load
window.onload = function() {
    const firstInteriorButton = document.querySelector('.butt button');
    if (firstInteriorButton) {
        orange(firstInteriorButton);
    }

    const firstExteriorButton = document.querySelector('.js-butt button');
    if (firstExteriorButton) {
        titaniumGrey(firstExteriorButton);
    }
};


document.getElementById('tip1').addEventListener('click', function() {
    const introSection = document.getElementById('target1');
    introSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tip2').addEventListener('click', function() {
    const introSection = document.getElementById('target2');
    introSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tip3').addEventListener('click', function() {
    const introSection = document.getElementById('target3');
    introSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tip4').addEventListener('click', function() {
    const introSection = document.getElementById('target4');
    introSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('yt-1').addEventListener('click', function() {
window.open('https://youtu.be/ziFvzevsn1s?si=5FHYvInZ7lRMrL4u', '_blank');
});