/**
 * Created by liutongtong on 5/30/15.
 */

$(document).ready(function() {
    index_disapper = function() {
        $(".archive-container").each(function(index) {
            var height = $(this).css("height");
            if (index % 2 == 0) {
                $(this).animate({top: "-" + height}, "slow");
            } else {
                $(this).animate({bottom: "-" + height}, "slow");
            }
        });
    };

    $(".archive-container").bind("click", function() {
        index_disapper();
    });


});