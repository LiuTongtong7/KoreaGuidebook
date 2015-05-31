/**
 * Created by maoyilin, liutongtong on 5/30/15.
 */

var active_slice = 0;

var set_slice_height = function() {
    $(".slice-container").css("height", $(window).height());
};

var scroll_to_slice = function() {
    var current_offset = $(window).scrollTop();
    var origin_offset = $(".slice-container:eq("+active_slice+")").offset().top;
    var max_offset = 20;
    if (current_offset - origin_offset < -max_offset) {
        switch_slice(active_slice - 1);
    } else if (current_offset - origin_offset > max_offset) {
        switch_slice(active_slice + 1);
    } else {
        //switch_slice(active_slice);
    }
};

var switch_count = 0;
var switch_slice = function(index) {
    active_slice = index;
    $(window).unbind("scroll");
    switch_count += 1;
    $("body").animate({
        scrollTop: $(".slice-container:eq("+active_slice+")").offset().top
    }, 700, function() {
        switch_count -= 1;
        if ($("html").hasClass("desktop") && switch_count == 0) {
            $(window).bind("scroll", scroll_to_slice);
        }
    });
    $(".slice-nav-item").removeClass("slice-nav-item-active");
    $(".slice-nav-item:eq("+active_slice+")").addClass("slice-nav-item-active");
};

var load_slice_images = function(min_millisecond, callback) {
    var start_time = (new Date()).getTime();
    var count = 0;

    $(".slice-container").css("left", $(window).width());
    $(".slice-nav").css("opacity", 0);

    var _slice_images = $(".slice-image");
    _slice_images.each(function() {
        var _this = $(this);
        var img = new Image();
        img.src = _this.attr("data-img");
        $(img).load(function() {
            _this.css("background-image", "url(" + img.src + ")");
            $(this).remove();
            count += 1;
            if (count == _slice_images.length) {
                var end_time = (new Date()).getTime();
                if (end_time - start_time > min_millisecond) {
                    callback();
                } else {
                    setTimeout(callback, min_millisecond-(end_time-start_time));
                }
            }
        })
    });
};

var slice_appear = function() {
    $(".slice-loading").animate({opacity: 0}, "slow");
    $(".slice-container").animate({left: 0}, "slow");
    $(".slice-nav").animate({opacity: 1}, "slow");

    var current_offset = $(window).scrollTop();
    var min_bias = $(window).height();
    var min_slice = 0;
    for (var i = 0; i < $(".slice-container").length; i++) {
        var standard_offset = $(".slice-container:eq("+i+")").offset().top;
        if (Math.abs(current_offset - standard_offset) < min_bias) {
            min_bias = Math.abs(current_offset - standard_offset);
            min_slice = i;
        }
    }
    switch_slice(min_slice);
};

$(document).ready(function() {
    set_slice_height();
    $(window).bind("resize", set_slice_height);

    load_slice_images(1000, slice_appear);

    $(".slice-nav-item").each(function(index) {
        $(this).bind("click", function() {
            switch_slice(index);
        });
    });
});
