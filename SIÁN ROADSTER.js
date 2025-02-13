function display() {
    let titles = document.querySelectorAll('.title img'); // Target the <img> within .title
    let src = titles[0].src.split('/').pop(); // Get the filename of the image
    
    switch(src) {
        case 'revuelto.jpg':
            document.querySelector('.car-title').innerHTML = 'LIMITED SERIES';
            document.querySelector('.car-matter').innerHTML = 'DARE TO LIVE MORE';
            break;
        case 'huracan.jpg':
            document.querySelector('.car-title').innerHTML = 'CONCEPT';
            document.querySelector('.car-matter').innerHTML = 'SKY TO SEA';
            break;
        case 'sian-roadster.jpg':
            document.querySelector('.car-title').innerHTML = 'REVUELTO';
            document.querySelector('.car-matter').innerHTML = 'FROM NOW ON';
            break;
        case 'asterion.jpg':
            document.querySelector('.car-title').innerHTML = 'HURACAN';
            document.querySelector('.car-matter').innerHTML = 'BEYOND THE CONCRETE';
            break;
        default:
            document.querySelector('.car-title').innerHTML = 'UNKNOWN';
            document.querySelector('.car-matter').innerHTML = '';
    }
}

function models() {
    var exploreElement = document.querySelector('.explore');
    var plusIcon = document.querySelector('.plus');
    var subMod = document.querySelector('.sub-mod');

    // Toggle the icon and text based on the current state
    if (plusIcon.src.includes('plus.png')) {
        plusIcon.src = "icons/minus.png";
        exploreElement.innerHTML = '<img class="plus" src="icons/minus.png"> Close The Explore box';
        subMod.style.display = 'flex';
    } else {
        plusIcon.src = "icons/plus.png";
        exploreElement.innerHTML = '<img class="plus" src="icons/plus.png"> Explore the Models';
        subMod.style.display = 'none';
    }

    // Display the model information based on the currently visible car title
    updateModelDetails();
}

function updateModelDetails() {
    var carTitle = document.querySelector('.car-title').innerHTML;
    var modelsInfo = {
        'REVUELTO': ['REVUELTO', '', '', ''],
        'HURACAN': ['HURACAN STERRATO', 'HURACAN TECNICA', 'HURACAN STO', 'HURACAN EVO SPYDER'],
        'LIMITED SERIES': ['COUNTACH LPI 800-4', 'SIAN FKP 37', 'SIAN ROADSTER'],
        'CONCEPT': ['NO Models', 'CURRENTLY']
    };

    if (modelsInfo[carTitle]) {
        ['m1', 'm2', 'm3', 'm4'].forEach((id, index) => {
            document.querySelector('.' + id).innerHTML = modelsInfo[carTitle][index];
        });
    }
}


function shiftLeft() {
    document.querySelector('.sub-mod').style.display = 'none';
    document.querySelector('.explore').innerHTML = '<img class="plus" src="icons/plus.png"> Explore the Models';
    let titles = document.querySelectorAll('.title');
    let firstTitle = titles[0].innerHTML;
    for (let i = 0; i < titles.length - 1; i++) {
        titles[i].innerHTML = titles[i + 1].innerHTML;
    }
    titles[titles.length - 1].innerHTML = firstTitle;
    display();
}

function shiftRight() {
    document.querySelector('.sub-mod').style.display = 'none';
    document.querySelector('.explore').innerHTML = '<img class="plus" src="icons/plus.png"> Explore the Models';
    let titles = document.querySelectorAll('.title');
    let lastTitle = titles[titles.length - 1].innerHTML;
    for (let i = titles.length - 1; i > 0; i--) {
        titles[i].innerHTML = titles[i - 1].innerHTML;
    }
    titles[0].innerHTML = lastTitle;
    display();
}


document.getElementById('playImage').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0; // Resets audio to start if clicked again
    }
    });

    document.addEventListener('DOMContentLoaded', function() {
        var playImage = document.getElementById('playImage1');
        var audioPlayer = document.getElementById('audioPlayer1');
    
        // Function to change the image when playing
        function changeImageWhilePlaying() {
            playImage.src = "icons/icons8-audio.gif";
        }
    
        // Function to revert to the default image
        function revertToDefaultImage() {
            playImage.src = "icons/ios-audio.png";
        }
    
        // Play the audio and change the image
        playImage.addEventListener('click', function() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                changeImageWhilePlaying();
            } else {
                audioPlayer.pause();
                revertToDefaultImage();
            }
        });
    
        // When audio ends, revert the image to default
        audioPlayer.addEventListener('ended', revertToDefaultImage);
    
        // Optionally, also revert the image when audio is paused manually
        audioPlayer.addEventListener('pause', revertToDefaultImage);
    });



function contact()
{
    document.querySelector('.total-sign-up').style.display = 'block';
    alert('Type in your business mail below')
}


function displayAllSpec()
{
    if(document.querySelector('.span-view').innerHTML === 'View All')
    {
        document.querySelector('.invisible-spec').style.display = 'block';
        document.querySelector('.span-view').innerHTML = 'View Less';
    }
    else
    {
        document.querySelector('.invisible-spec').style.display = 'none';
        document.querySelector('.span-view').innerHTML = 'View All';
    }
}
   



const slides = document.getElementById('slides');
let currentIndex = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    } else if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});

function moveSlide(direction) {
    const totalImages = slides.children.length;
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    slides.style.transform = `translateX(-${100 * currentIndex}%)`;
}


document.addEventListener('DOMContentLoaded', function () {
    // Make sure elements are defined inside the DOMContentLoaded event
    const textElement = document.getElementById('glowingText');
    const text = textElement.innerText;
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        newText += `<span>${text[i]}</span>`;
    }
    textElement.innerHTML = newText;
});




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

document.getElementById('tip5').addEventListener('click', function() {
    const introSection = document.getElementById('target5');
    introSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tip6').addEventListener('click', function() {
    const introSection = document.getElementById('target6');
    introSection.scrollIntoView({ behavior: 'smooth' });
});


document.getElementById('yt-1').addEventListener('click', function() {
    window.open('https://youtu.be/CjxCP5kUr8c?si=uEh-o-F_FJx5AM1T');
});


// script.js
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}


function openHome() {
    // This will open a new tab or focus the tab if the window name is already known
    // Change 'your_other_page.html' to your actual file or URL
    var url = 'new-home.html';
    var win = window.open(url, '_blank');
    win.focus();
}

function openLambo() {
    // This will open a new tab or focus the tab if the window name is already known
    // Change 'your_other_page.html' to your actual file or URL
    var url = 'lambo-landing-page.html';
    var win = window.open(url, '_blank');
    win.focus();
}


function shortlisted()
{
    localStorage.setItem('l-3','true');
}