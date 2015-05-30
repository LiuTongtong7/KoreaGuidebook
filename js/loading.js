/**
 * Created by liutongtong on 5/30/15.
 */

$(document).ready(function() {
    var _archive_image = $(".archive-image");
    var total = _archive_image.length;
    var count = 0;
    _archive_image.each(function() {
        var _this = $(this);
        var img = new Image();
        img.src = _this.attr("data-img");
        $(img).load(function() {
            _this.css("background-image", "url(" + img.src + ")");
            $(this).remove();
            count += 1;
            if (count == total) {
                $("body").css("opacity", 1);
            }
        })
    });
});
