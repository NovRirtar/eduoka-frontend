//banner
 // Sử dụng tên hàm cụ thể hơn
 function autoSlide() {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = slides[slides.length - 1];
    var nextSlide = slides[0];

    currentSlide.style.display = "none";
    nextSlide.style.display = "block";
}

// Thực hiện autoSlide sau mỗi khoảng thời gian
setInterval(autoSlide, 2000);
  
