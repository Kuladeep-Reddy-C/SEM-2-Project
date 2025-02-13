document.addEventListener("DOMContentLoaded", function() {

document.getElementById('tip1').addEventListener('click', function() {
    const introSection = document.getElementById('target1');
    introSection.scrollIntoView({ behavior: 'smooth' });
});

});