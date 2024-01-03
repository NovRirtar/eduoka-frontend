//banner
$(document).ready(function () {
    var currentIndex = 0;
    var images = $(".banner img");
    var totalImages = images.length;

    function showImage(index) {
      images.hide();
      images.eq(index).fadeIn();
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }

    // Hiển thị ảnh đầu tiên khi trang web được tải
    showImage(currentIndex);

    // Tự động chuyển ảnh sau mỗi 5 giây (hoặc thời gian mong muốn)
    setInterval(nextImage, 2000);
  });

  //select
  $(document).ready(function () {
    $("#select2").select2();
  });

  //
  document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('hide');
        } else {
          slide.classList.add('hide');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateDots();
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateDots();
      showSlide(currentSlide);
    }
  
    function goToSlide(index) {
      currentSlide = index;
      updateDots();
      showSlide(currentSlide);
    }
  
    function createDots() {
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });
    }
  
    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    // Initial display
    showSlide(currentSlide);
    createDots();
    updateDots();
  
    // Add event listeners for next and previous buttons
    document.getElementById('nextButton').addEventListener('click', nextSlide);
    document.getElementById('prevButton').addEventListener('click', prevSlide);
  });
  