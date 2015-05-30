/**
 * Created by liutongtong on 5/30/15.
 */

$(document).ready(function() {
    var index_disapper = function(callback) {
        $(".archive-container").each(function(index) {
            var height = $(this).css("height");
            if (index % 2 == 0) {
                $(this).animate({top: "-" + height}, "slow", callback);
            } else {
                $(this).animate({bottom: "-" + height}, "slow", callback);
            }
        });
    };

    $(".archive-container").bind("click", function() {
        index_disapper(test);
    });

    var test = function() {
        window.location.href = 'korean.html';
    };
});