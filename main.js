let currentSlide = 0;

function updateSlider() {
    const wrapper = document.getElementById('testimonial-wrapper');
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextTestimonial() {
    const totalSlides = document.querySelectorAll('#testimonial-wrapper > div').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevTestimonial() {
    const totalSlides = document.querySelectorAll('#testimonial-wrapper > div').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}
