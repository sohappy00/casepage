$(() => {
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= 200) {
            $('.banner_text_inner p.eng').add('.banner_text_inner h2').css({
                animation: 'fadeInLeft 3s'
            });
            $('.banner_text_inner p.kor').add('.section_banner .motion_up').css({
                animation: 'fadeInBottom 3s'
            });
            $('.section_banner .motion_down').css({
                animation: 'fadeInTop 3s'
            });
        }

        if (scrollTop >= 1100) {
            $('.new_best_title').add('.product_item_list ul').css({
                animation: 'fadeInBottom 3s'
            });
        }

        if (scrollTop >= 2500) {
            $('.story_title').add('.story_banner').css({
                animation: 'fadeInBottom 3s'
            });
        }

        if (scrollTop >= 3500) {
            $('.magazine_title').add('.section_magazine li').css({
                animation: 'fadeInBottom 3s'
            });
        }
    });
});