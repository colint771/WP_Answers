let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function slideToNext() {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }

    function slideToPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1;
      }
      updateCarousel();
    }

    function updateCarousel() {
      const newTransformValue = -100 * currentIndex;
      const carouselInner = document.querySelector('.carousel-inner');
      carouselInner.style.transform = `translateX(${newTransformValue}%)`;
    }

    // Auto slide the carousel
    setInterval(slideToNext, 3000);