/**
 * Created by liutongtong on 5/30/15.
 */

$(function() {
    var _archive_image = $(".archive-image");
    var total = _archive_image.length;
    var count = 0;
    _archive_image.each(function(i) {
        var _this = $(this);
        var img = new Image();
        img.src = _this.attr("data-img");
        $(img).load(function() {
            _this.css("background-image", "url(" + img.src + ")");
            $(this).remove();
            count += 1;
            if (count == total) {
                _archive_image.css("opacity", 1);
            }
        })
    });
});