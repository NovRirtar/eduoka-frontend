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
