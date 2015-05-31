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
});