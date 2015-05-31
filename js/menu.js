/**
 * Created by maoyilin, liutongtong on 5/31/15.
 */

$(document).ready(function() {
    $(".menu-button").bind("click", function() {
        if ($(".menu").hasClass("menu-active")) {
            $(".archives").removeClass("archives-inactive");
            $(".menu").removeClass("menu-active");
        } else {
            $(".archives").addClass("archives-inactive");
            $(".menu").addClass("menu-active");
        }
    });
});