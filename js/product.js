$(() => {
	var selectedOptions = [];

	$('.product_option').change(function () {
		var selectedOption = $(this).val();
		var itemName = $('.item_name').text();

		// 중복 체크
		if (selectedOptions.includes(selectedOption)) {
			alert("이미 선택한 옵션입니다.");
			$(this).prop('selectedIndex', 0); // 선택 취소
			return;
		}
		selectedOptions.push(selectedOption);

		var productName, productPrice;
		switch (selectedOption) {
			case '1':
				productName = '에어팟 프로';
				productPrice = '13,000원';
				break;
			case '2':
				productName = '에어팟 프로2';
				productPrice = '13,000원';
				break;
			case '3':
				productName = '에어팟3';
				productPrice = '13,000원';
				break;
			default:
				return;  // 옵션 선택 안 한 경우
		}

		// 새로운 제품 정보를 테이블에 추가
		var newRow = '<tr>';
		newRow += '<td>' + itemName + ' - ' + productName + '</td>';
		newRow += '<td><input type="number" name="" id="" class="item_amount" min="1" max="9" value="1">';
		newRow += '<img src="image/btn_price_delete.gif" alt="제거" class="price_delete_btn"></td>';
		newRow += '<td><strong>' + productPrice + '</strong></td>';
		newRow += '</tr>';

		$('.table_product_list > table > tbody').append(newRow);
	});

	// 제거 버튼 클릭 시 해당 행 제거
	$(document).on('click', '.price_delete_btn', function () {
		$(this).closest('tr').remove();
	});

	// ====================================================

	$('.tabs > li').click(function () {
		var tabId = $(this).attr('data-tab');

		$('.tabs > li').removeClass('pic');
		$('.pro_tab').removeClass('pic');

		$(this).addClass('pic');
		$('#' + tabId).addClass('pic');
	});


	$('.review_hide').hide();
	let sw = false;

	$('.review_click').click(function () {
		sw = !sw;
		if (sw) {
			$(this).next().slideDown(100);
		} else {
			$(this).next().slideUp(100);
		}
	});


	$('.qna_hide').hide();

	$('.qna_click').click(function () {
		sw = !sw;
		if (sw) {
			$(this).next().slideDown(100);
		} else {
			$(this).next().slideUp(100);
		}
	});

	const $topBtn = document.querySelector(".TopBtn");

	// 버튼 클릭 시 맨 위로 이동
	$topBtn.onclick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
});
