$(document).ready(function () {
    // Tìm tất cả các mục menu cha
    var parentLis = $(".parent-li");
    var btnToggle = $(this).find(".btn-toggle i");
    // Sử dụng vòng lặp foreach để xử lý từng mục menu cha
    parentLis.each(function () {
        // Lấy phần tử nội dung dropdown tương ứng
        var childrenUl = $(this).find(".children");
        $(".children").hide();
        // Thêm sự kiện click vào mục menu cha
        $(this).on("click", function () {
            // Nếu nội dung dropdown đang ẩn, thì hiển thị nó
            if (childrenUl.is(":hidden")) {
                childrenUl.slideDown();
            } else {
                // Nếu nội dung dropdown đang hiển thị, thì ẩn nó
                childrenUl.slideUp();
            }
        });
    });
});

