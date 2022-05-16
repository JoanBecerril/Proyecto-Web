jQuery('document').ready(function($) {

    var menuBtn = $('.ver-menu'),
        menu = $('.nav-links');

    menuBtn.click(function() {

        if (menu.hasClass('show')) {

            menu.removeClass('show');
        } else {

            menu.addClass('show');
        }

    });

});