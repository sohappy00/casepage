$(() => {
    // 애니메이션
    $('h2').css('animation', 'fadeInLeft 3s');

    // 전역 변수
    let isId = false;
    let isPassword = false;
    let isEmail = false;
    let isPhone = false;

    // 아이디 검사
    $("input[name='userid']").on("input", function () {
        const userid = $(this).val();
        const message = $(this).next();

        if (!userid) {
            message.css('color', '#353535').text('(영어, 숫자 포함 4 ~ 16자)');
            isId = false;
            return;
        }

        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,16}$/;
        const isValidId = regex.test(userid);

        message.css('color', isValidId ? 'green' : 'red').text(isValidId ? `${userid}(은)는 사용 가능한 아이디입니다.` : '(영어, 숫자 포함 4 ~ 16자)');
        isId = isValidId;
    });

    // 비밀번호 검사
    $("input[name='userpwd']").on("input", function () {
        const userpwd = $(this).val();
        const message = $(this).next();

        if (!userpwd) {
            message.css('color', '#353535').text('(영어, 숫자, 특수문자 포함 8 ~ 16자)');
            isPassword = false;
            return;
        }

        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,16}$/;
        const isValidPassword = regex.test(userpwd);

        message.css('color', isValidPassword ? 'green' : 'red').text(isValidPassword ? '사용 가능한 비밀번호입니다.' : '(영어, 숫자, 특수문자 포함 8 ~ 16자)');
    });

    // 비밀번호 확인 검사
    $("input[name='userpwdCheck']").on("input", function () {
        const userpwd = $("input[name='userpwd']").val();
        const userpwdCheck = $(this).val();
        const message = $(this).next();

        if (userpwd !== userpwdCheck) {
            message.css('color', 'red').text('비밀번호가 일치하지 않습니다.');
            isPassword = false;
            return;
        }

        message.text('');
        isPassword = true;
    });

    
    // 휴대폰 검사
    $("input[name='userphone']").on("input", function () {
        const phone = $(this).val();
        const message = $(this).next();

        if (!phone) {
            message.text('');
            return;
        }

        const regex = /^010-?([0-9]{4})-?([0-9]{4})$/;;
        const isValidPhone = regex.test(phone);
        if (!isValidPhone) {
            message.css('color', 'red').text('사용할 수 없는 번호입니다.');
            isPhone = false;
            return;
        }

        message.css('color', 'green').text('사용 가능한 번호입니다.');
        isPhone = true;
    });

    // 이메일 검사
    $("input[name='useremail']").on("input", function () {
        const email = $(this).val();
        const message = $(this).next();

        if (!email) {
            message.text('');
            return;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = regex.test(email);
        if (!isValidEmail) {
            message.css('color', 'red').text('사용할 수 없는 이메일입니다.');
            isEmail = false;
            return;
        }

        message.css('color', 'green').text('사용 가능한 이메일입니다.');
        isEmail = true;
    });

    // 체크박스 검사
    $('.agree_all_chk').click(function () {
        const isChecked = $(this).prop('checked');
        $('.agree_chk').prop('checked', isChecked);
    });

    // 하위 체크박스를 클릭했을 때
    $('.agree_chk').click(function () {
        const isAllChecked = $('.agree_chk').length === $('.agree_chk:checked').length;
        $('.agree_all_chk').prop('checked', isAllChecked);
    });

    // submit 버튼 클릭했을 때
    $('.btn_register').click(function(event) {
        if(!isId) {
            alert('아이디를 다시 한번 확인해주시길 바랍니다.');
            registerForm.userid.focus();
            return event.preventDefault();
        }
        if(!isPassword) {
            alert('비밀번호를 다시 한번 확인해주시길 바랍니다.');
            registerForm.userpwd.focus();
            return event.preventDefault();
        }
        if(!isPhone) {
            alert('번호를 다시 한번 확인해주시길 바랍니다.');
            registerForm.userphone.focus();
            return event.preventDefault();
        }
        if(!isEmail) {
            alert('이메일을 다시 한번 확인해주시길 바랍니다.');
            registerForm.useremail.focus();
            return event.preventDefault();
        }
    });
});

//숫자가 아닌 문자가 들어갔을 때 리턴값 false로 돌려줌
function checkInputNum(e){
    if ((e.keyCode < 48) || (e.keyCode > 57)){
        e.returnValue = false;
    }
}