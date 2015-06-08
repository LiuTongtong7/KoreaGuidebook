/**
 * Created by maoyilin, liutongtong on 6/1/15.
 */

var about_image_url = ["img/about/0.jpg", "img/about/1.jpg", "img/about/2.jpg", "img/about/3.jpg", "img/about/4.jpg"];
var about_images = [];
var order = [];
var next_container = 0;

var load_images = function(min_millisecond, callback) {
    var start_time = (new Date()).getTime();
    var count = 0;

    for (var i = 0; i < about_image_url.length; i++) {
        about_images.push(new Image());
        about_images[i].src = about_image_url[i];
        $(about_images[i]).load(function() {
            count += 1;
            if (count == about_image_url.length) {
                for (var j = 0; j < about_images.length; j++) {
                    order.push(j);
                }
                var end_time = (new Date()).getTime();
                if (end_time - start_time > min_millisecond) {
                    callback();
                } else {
                    setTimeout(callback, min_millisecond-(end_time-start_time));
                }
            }
        })
    }
};

var set_backgrounds = function() {
    var _photo_container_backgrounds = $(".photo-container:eq(" + next_container + ") .photo-container-background");
    var _photo_image_containers = $(".photo-container:eq(" + next_container + ") .photo-image-container");

    _photo_container_backgrounds.each(function() {
        var photo_index = parseInt(Math.random() * _photo_image_containers.length);
        if (photo_index == _photo_image_containers.length) {
            photo_index -= 1;
        }
        $(this).css("background-image", "url(" + about_images[photo_index].src + ")");
    });
    _photo_image_containers.each(function(index) {
        $(this).css("background-image", "url(" + about_images[order[index]].src + ")");
        var MAX_ANGLE = 10;
        var angle = parseInt(Math.random() * MAX_ANGLE);
        $(this).css({
            "transform": "rotate(" + angle + "deg) translateX(-50%) translateY(-50%)",
            "-ms-transform": "rotate(" + angle + "deg) translateX(-50%) translateY(-50%)",
            "-moz-transform": "rotate(" + angle + "deg) translateX(-50%) translateY(-50%)",
            "-webkit-transform": "rotate(" + angle + "deg) translateX(-50%) translateY(-50%)",
            "-o-transform": "rotate(" + angle + "deg) translateX(-50%) translateY(-50%)"
        });
    });
    var temp = order[0];
    for (var i = 0; i < order.length - 1; i++) {
        order[i] = order[i+1];
    }
    order[order.length - 1] = temp;
};

var set_container_animate = function() {
    next_container = 1 - next_container;

    var _photo_container = $(".photo-container:eq(" + next_container + ")");
    set_backgrounds();
    var MAX_ANGLE = 10;
    var pos_sign = Math.random() > 0.5 ? 1 : -1;
    var pos_angle = parseInt(Math.random() * MAX_ANGLE * pos_sign);
    var pos_x = parseInt(Math.random() * 60) + 20;
    var pos_y = parseInt(Math.random() * 60) + 20;
    var rotate_direction = -pos_sign;
    var translateX_direction = Math.random() > 0.5 ? 1 : -1;
    var translateX_dist = 10 * translateX_direction;
    var translateY_direction = Math.random() > 0.5 ? 1 : -1;
    var translateY_dist = 10 * translateY_direction;
    _photo_container.css({
        "transform-origin": pos_x + "% " + pos_y + "%",
        "transform": "rotate(" + pos_angle + "deg)",
        "-ms-transform-origin": pos_x + "% " + pos_y + "%",
        "-ms-transform": "rotate(" + pos_angle + "deg)",
        "-moz-transform-origin": pos_x + "% " + pos_y + "%",
        "-moz-transform": "rotate(" + pos_angle + "deg)",
        "-webkit-transform-origin": pos_x + "% " + pos_y + "%",
        "-webkit-transform": "rotate(" + pos_angle + "deg)",
        "-o-transform-origin": pos_x + "% " + pos_y + "%",
        "-o-transform": "rotate(" + pos_angle + "deg)"
    });
    //$.keyframe.debug = true;
    $.keyframe.define({
        name: "hidden-container-animate" + next_container,
        '0%': {
            "transform": "rotate(" + pos_angle + "deg) " +
            "translate(" + 0 + ", " + 0 + ")",
            "-ms-transform": "rotate(" + pos_angle + "deg) " +
            "translate(" + 0 + ", " + 0 + ")",
            "-moz-transform": "rotate(" + pos_angle + "deg) " +
            "translate(" + 0 + ", " + 0 + ")",
            "-webkit-transform": "rotate(" + pos_angle + "deg) " +
            "translate(" + 0 + ", " + 0 + ")",
            "-o-transform": "rotate(" + pos_angle + "deg) " +
            "translate(" + 0 + ", " + 0 + ")",
            "opacity": 0
        },
        '17%': {
            "transform": "rotate(" + (pos_angle+rotate_direction) + "deg) " +
            "translate(" + translateX_dist + "px, " + translateY_dist + "px)",
            "-ms-transform": "rotate(" + (pos_angle+rotate_direction) + "deg) " +
            "translate(" + translateX_dist + "px, " + translateY_dist + "px)",
            "-moz-transform": "rotate(" + (pos_angle+rotate_direction) + "deg) " +
            "translate(" + translateX_dist + "px, " + translateY_dist + "px)",
            "-webkit-transform": "rotate(" + (pos_angle+rotate_direction) + "deg) " +
            "translate(" + translateX_dist + "px, " + translateY_dist + "px)",
            "-o-transform": "rotate(" + (pos_angle+rotate_direction) + "deg) " +
            "translate(" + translateX_dist + "px, " + translateY_dist + "px)",
            "opacity": 1
        },
        '83%': {
            "transform": "rotate(" + (pos_angle+5*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*5 + "px, " + translateY_dist*5 + "px)",
            "-ms-transform": "rotate(" + (pos_angle+5*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*5 + "px, " + translateY_dist*5 + "px)",
            "-moz-transform": "rotate(" + (pos_angle+5*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*5 + "px, " + translateY_dist*5 + "px)",
            "-webkit-transform": "rotate(" + (pos_angle+5*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*5 + "px, " + translateY_dist*5 + "px)",
            "-o-transform": "rotate(" + (pos_angle+5*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*5 + "px, " + translateY_dist*5 + "px)",
            "opacity": 1
        },
        '100%': {
            "transform": "rotate(" + (pos_angle+6*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*6 + "px, " + translateY_dist*6 + "px)",
            "-ms-transform": "rotate(" + (pos_angle+6*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*6 + "px, " + translateY_dist*6 + "px)",
            "-moz-transform": "rotate(" + (pos_angle+6*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*6 + "px, " + translateY_dist*6 + "px)",
            "-webkit-transform": "rotate(" + (pos_angle+6*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*6 + "px, " + translateY_dist*6 + "px)",
            "-o-transform": "rotate(" + (pos_angle+6*rotate_direction) + "deg) " +
            "translate(" + translateX_dist*6 + "px, " + translateY_dist*6 + "px)",
            "opacity": 0
        }
    });
    _photo_container.playKeyframe({
        name: "hidden-container-animate" + next_container,
        duration: '6s',
        timingFunction: 'linear',
        delay: '0s',
        iterationCount: '1',
        //direction: 'alternate',
        fillMode: 'forwards',
        complete: function() {
            _photo_container.addClass("photo-container-disabled");
        }
    });
    _photo_container.removeClass("photo-container-disabled");
};

var set_loading_animate = function() {
    //$.keyframe.debug = true;
    $.keyframe.define({
        name: "loading-animate",
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        }
    });
    $(".photo-loading").playKeyframe({
        name: "loading-animate",
        duration: '1s',
        timingFunction: 'linear',
        delay: '0s',
        iterationCount: '1',
        //direction: 'alternate',
        fillMode: 'forwards'
        //complete: function(){}
    });
};

var about_appear = function() {
    set_container_animate();
    setTimeout(function() {
        setInterval(set_container_animate, 5000);
    }, 1000);
    set_loading_animate();
};

$(document).ready(function() {
    load_images(1000, about_appear);
});
