// JavaScript for Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImg.src = image.src; // Set the clicked image source in the lightbox
            lightbox.classList.add('active'); // Show the lightbox
        });
    });

    // Close the lightbox when clicked outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });

});
