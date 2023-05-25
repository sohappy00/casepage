$(() => {
    $('h2').css('animation', 'fadeInLeft 3s');

    // 체크박스 검사
    $('.all_chk').click(function () {
        const isChecked = $(this).prop('checked');
        $('.item_chk').prop('checked', isChecked);
    });

    // 하위 체크박스를 클릭했을 때
    $('.item_chk').click(function () {
        const isAllChecked = $('.item_chk').length === $('.item_chk:checked').length;
        $('.all_chk').prop('checked', isAllChecked);
    });
});