/**
 * Created by maoyilin, liutongtong on 5/30/15.
 */

var active_slice = 1;

var set_slice_height = function() {
    $(".slice-container").css("height", $(window).height());
};

var scroll_to_slice = function() {
    var current_offset = $(window).scrollTop();
    var origin_offset = $(".slice-container:nth-child("+active_slice+")").offset().top;
    var max_offset = 50;
    if (current_offset - origin_offset < -max_offset) {
        switch_slice(active_slice - 1);
    } else if (current_offset - origin_offset > max_offset) {
        switch_slice(active_slice + 1);
    } else {
        //switch_slice(active_slice);
    }
};

var switch_slice = function(index) {
    active_slice = index;
    $(window).unbind("scroll");
    $("body").animate({
        scrollTop: $(".slice-container:nth-child("+active_slice+")").offset().top
    }, 1000, function() {
        $(window).bind("scroll", scroll_to_slice)
    });
    $(".slice-nav-item").removeClass("slice-nav-item-active");
    $(".slice-nav-item:nth-child("+active_slice+")").addClass("slice-nav-item-active");
};

$(document).ready(function() {
    set_slice_height();
    $(window).bind({
        "resize": set_slice_height,
        "scroll": scroll_to_slice
    });

    $(".slice-nav-item").each(function(index) {
        $(this).bind("click", function() {
            switch_slice(index+1);
        });
    });

    var current_offset = $(window).scrollTop();
    for (var i = 0; i < $(".slice-container").length; i++) {
        var standard_offset = $(".slice-container:nth-child("+(i+1)+")").offset().top;
        if (Math.abs(current_offset - standard_offset) < $(window).height() / 2) {
            switch_slice(i+1);
            break;
        }
    }
});
