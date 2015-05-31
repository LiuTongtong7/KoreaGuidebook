/**
 * Created by maoyilin, liutongtong on 5/31/15.
 */

$(document).ready(function() {
    $(".menu-button").bind("click", function() {
        if ($(".menu").hasClass("menu-active")) {
            $(".archives").removeClass("archives-inactive");
            $(".slices").removeClass("slices-inactive");
            $(".slice-nav").removeClass("slice-nav-inactive");
            $(".menu").removeClass("menu-active");
            enable_archive_click();
        } else {
            $(".archives").addClass("archives-inactive");
            $(".slices").addClass("slices-inactive");
            $(".slice-nav").addClass("slice-nav-inactive");
            $(".menu").addClass("menu-active");
            disable_archive_click();
        }
    });
});