$(document).ready(function () {
    $('nav a').hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    );

    $('nav li').hover(
        function () {
            $(this).children('ul').stop(true, true).slideDown(300);
        },
        function () {
            $(this).children('ul').stop(true, true).slideUp(300);
        }
    );
});