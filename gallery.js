document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // If the lightbox is already active, close it
            if (lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            } else {
                // Otherwise, open the lightbox and set the clicked image
                lightboxImg.src = image.src;
                lightbox.classList.add('active');
            }
        });
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});
