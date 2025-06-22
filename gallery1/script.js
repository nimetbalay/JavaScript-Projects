// Global variables
let slideIndex = 1;

// Open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Change slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Set current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    // Loop back to first slide if past the last slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Go to last slide if before the first slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the lightbox functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Show the first slide by default
    showSlides(slideIndex);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('lightbox').style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                plusSlides(-1);
            } else if (e.key === 'ArrowRight') {
                plusSlides(1);
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
}); 