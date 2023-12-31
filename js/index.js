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
    setInterval(nextImage, 5000);
  });

  //select
  $(document).ready(function () {
    $("#select2").select2();
  });

  //
  // $(document).ready(function() {
  //   var currentSlide = 0;
  //   var totalSlides = Math.ceil($(".col-md-4").length / 3);

  //   function showSlide(index) {
  //     $(".col-md-4").addClass("hide");
  //     var startIndex = index * 3;
  //     var endIndex = startIndex + 3;
  //     $(".col-md-4").slice(startIndex, endIndex).removeClass("hide");
  //     $(".slider-container").css("transform", "translateX(" + -index * 33.333333 + "%)");
  //   }

  //   function nextSlide() {
  //     currentSlide = (currentSlide + 1) % totalSlides;
  //     showSlide(currentSlide);
  //   }

  //   setInterval(nextSlide, 1000); // Tự động chuyển slide sau 3 giây

  //   // Bắt sự kiện khi click nút chuyển slide
  //   $(".next-btn").click(function() {
  //     nextSlide();
  //   });
  // });


