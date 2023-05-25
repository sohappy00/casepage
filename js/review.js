$(document).ready(function () {
    $('h2').css('animation', 'fadeInLeft 3s');

    $('.tabs > li').click(function () {
        var tabId = $(this).attr('data-tab');

        $('.tabs > li').removeClass('pic');
        $('.review_product_inner').removeClass('pic');

        $(this).addClass('pic');
        $('#' + tabId).addClass('pic');
    });
});