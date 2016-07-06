/**
 * Created by flo on 7/6/16.
 */

var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '185px'
        }, 200);
        $('body').css("overflow", "hidden");
    });

    $('.icon-close').click(function() {
        $('.menu').animate({
            left: '-185px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });
    
};


$(document).ready(main);