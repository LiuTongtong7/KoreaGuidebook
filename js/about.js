/**
 * Created by maoyilin, liutongtong on 6/1/15.
 */

$(function() {
    var window_height = $(window).height();
    var window_width = $(window).width();
    var grid_interval = 73;
    var grid_thick = 2;
    var horizontal_line = "<div class='grid-horizontal-line'></div>";
    var vertical_line = "<div class='grid-vertical-line'></div>";
    for (var i = 1; i < window_height / grid_interval; i++) {
        var new_line = $(horizontal_line);
        new_line.css({"top": grid_interval * i - grid_thick / 2, "left": 0});
        $(".about-us-slice-container").append(new_line);
    }
    for (var i = 1; i < window_width / grid_interval; i++) {
        var new_line = $(vertical_line);
        new_line.css({"top": 0, "left": grid_interval * i - grid_thick / 2});
        $(".about-us-slice-container").append(new_line);
    }
});