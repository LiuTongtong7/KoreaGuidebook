/**
 * Created by maoyilin, liutongtong on 5/31/15.
 */

$(document).ready(function() {
    $(".menu-button").bind("click", function() {
        if ($(".menu").hasClass("menu-active")) {
            if ($(".archives").length > 0) {
                $(".archives").removeClass("archives-inactive");
                enable_archive_click();
            }
            if ($(".slices").length > 0) {
                $(".slices").removeClass("slices-inactive");
                $(".slice-nav").removeClass("slice-nav-inactive");
            }
            $(".menu").removeClass("menu-active");
        } else {
            if ($(".archives").length > 0) {
                $(".archives").addClass("archives-inactive");
                disable_archive_click();
            }
            if ($(".slices").length > 0) {
                $(".slices").addClass("slices-inactive");
                $(".slice-nav").addClass("slice-nav-inactive");
            }
            $(".menu").addClass("menu-active");
        }
    });

    $(".menu-nav-item-content a").each(function() {
        var _this = $(this);
        _this.bind("click", function() {
            $(".menu-button").trigger("click");
            if (window.location.href.indexOf(_this.attr("data-href")) >= 0) {
                return;
            }
            setTimeout(function () {
                $(".slice-loading").animate({opacity: 1});
                $(".slice-nav").animate({"opacity": 0});
                $(".slice-container").animate({"left": -$(window).width()}, "slow", function() {
                    window.location.href = _this.attr("data-href");
                });
            }, 500);
        });
    });
});