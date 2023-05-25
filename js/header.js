$(() => {
    $('.bear_top').bind('click', function () {
        $('html, body').animate({ scrollTop: '0' }, 'slow');
    });

    $(window).scroll(() => {
        const headerHeight = $(".top_menu_area").height();
        const topMenu = $('.top_menu_area');
        const topMenuH1 = topMenu.find('h1');
        const topMenuUl = topMenu.find('ul');
        const topMenuLinks = topMenu.find('li a');

        if ($(this).scrollTop() >= headerHeight) {
            topMenu.css({
                position: 'fixed',
                zIndex: 99,
                top: 0,
                boxShadow: '0 1px 0 0 rgb(0 0 0 / 10%)'
            });
            topMenuH1.css({
                width: 40,
                height: 40
            });
            topMenuUl.css({
                height: 32,
                paddingTop: 8
            });
            topMenuLinks.css({
                fontSize: 14,
                padding: '5px 0 12px',
                margin: '0px 20px'
            });
        } else {
            topMenu.css({
                position: 'relative',
                boxShadow: 'none'
            });
            topMenuH1.css({
                width: 100,
                height: 100
            });
            topMenuUl.css({
                height: 70,
                paddingTop: 30
            });
            topMenuLinks.css({
                fontSize: 16,
                padding: '8px 0 30px',
                margin: '3px 23px 0'
            });
        }
    });
});  