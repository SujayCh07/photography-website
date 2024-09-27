document.addEventListener('DOMContentLoaded', function() {
    // Select the necessary elements
    const carouselInner = document.querySelector('.carousel-inner');
    const dots = document.querySelectorAll('.dot');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const overlay = document.querySelector('.overlay');
    const overlayRight = document.querySelector('.overlay-right');
    let currentIndex = 0;

    // Function to show the overlay with animation
    function showOverlay() {
        overlay.classList.add('show');
        overlayRight.classList.add('show');
    }

    // Show the overlay when the page loads
    showOverlay();

    // Function to update carousel slides and dots
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // Function to show a specific slide based on index
    function showSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Carousel controls
    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        showSlide((currentIndex + 1) % carouselItems.length);
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        showSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
    });

    document.querySelector('.overlay-right').addEventListener('click', () => {
        showSlide((currentIndex + 1) % carouselItems.length);
    });

    document.querySelector('.overlay').addEventListener('click', () => {
        showSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
    });

    // Carousel dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Get the carousel element
        const parallax = document.querySelector('.carousel');
    
        // Function to handle scroll event
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            parallax.style.transform = `translateY(${scrollTop * 0.5}px)`; // Adjust multiplier for desired effect
        }
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        // Get the gallery element
        const gallery = document.querySelector('#gallery');
    
        // Function to handle scroll event
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            gallery.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Adjust multiplier for desired effect
        }
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    });
    

    // Ensure that carousel starts at the first slide
    updateCarousel();

    // Trackpad swipe support
    let startX;

    function handleSwipe(event) {
        if (!startX) return;
        const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) { // Threshold for swipe
            if (diffX > 0) {
                // Swipe left
                showSlide((currentIndex + 1) % carouselItems.length);
            } else {
                // Swipe right
                showSlide((currentIndex - 1 + carouselItems.length) % carouselItems.length);
            }
        }
        startX = null;
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    // Add event listeners for swipe gestures on trackpads
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleSwipe);
    // script.js

    window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallax = document.querySelector('.carousel');
    parallax.style.backgroundPositionY = -(scrollTop * 0.5) + 'px';
});
/// Get the image element
const image = document.querySelector('.gallery-box img');

// Add a click event listener to the image
image.addEventListener('click', function() {
  // Create a new div element to display the fullscreen image
  const fullscreenDiv = document.createElement('div');
  fullscreenDiv.classList.add('fullscreen-image');

  // Create an image element to display the fullscreen image
  const fullscreenImage = document.createElement('img');
  fullscreenImage.src = image.src;

  // Create a caption element to display the caption
  const fullscreenCaption = document.createElement('p');
  fullscreenCaption.textContent = caption.textContent;

  // Create a description element to display the description
  const fullscreenDescription = document.createElement('p');
  fullscreenDescription.textContent = description.textContent;

  // Append the fullscreen elements to the fullscreen div
  fullscreenDiv.appendChild(fullscreenImage);
  fullscreenDiv.appendChild(fullscreenCaption);
  fullscreenDiv.appendChild(fullscreenDescription);

  // Append the fullscreen div to the body
  document.body.appendChild(fullscreenDiv);

  // Add a click event listener to close the fullscreen image
  fullscreenDiv.addEventListener('click', function() {
    fullscreenDiv.remove();
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showCurrentItem() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        showCurrentItem();
    });

    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        showCurrentItem();
    });

    showCurrentItem();
});
const photosGrid = document.getElementById('photosGrid');

function showPhotos(photos) {
    photosGrid.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        photosGrid.appendChild(img);
    });
}

function showNaturePhotos() {
    const naturePhotos = ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg', 'nature5.jpg']; // Add more nature photos
    showPhotos(naturePhotos);
}

function showCityPhotos() {
    const cityPhotos = ['city1.jpg', 'city2.jpg', 'city3.jpg', 'city4.jpg', 'city5.jpg']; // Add more city photos
    showPhotos(cityPhotos);
}

function showBeachPhotos() {
    const beachPhotos = ['beach1.jpg', 'beach2.jpg', 'beach3.jpg', 'beach4.jpg', 'beach5.jpg']; // Add more beach photos
    showPhotos(beachPhotos);
}
});
