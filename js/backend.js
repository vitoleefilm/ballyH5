(function($){
	$.post = function(url,_data,callback){
		var data = {};
		if(!callback && typeof(_data) == 'function'){
			callback = _data;
		}else{
			data = _data;
		};
		if(!data.hideLoading){
			$.fancybox && $.fancybox.showLoading();
		}
		$.ajax({
			url: url,
			data: data,
			type: "POST",
			dataType: "html",
			success: function(data){
				callback && callback(data);
			}
		});
	};
});

$('.btnSubmit').click(function(){
	var $this = $(this);
	if ($this.hasClass('ajaxed')) {
		return false;
	}
	$('.giftForm li').removeClass('error');
	var user_name 		= $('.giftForm').find('.user_name').val();
	var mobile_number 	= $('.giftForm').find('.mobile_number').val();
	var wechat_name 	= $('.giftForm').find('.wechat_name').val();
	var score 			= $('.score').find('strong').html();
	var play_time 		= $('.giftForm').find('.play_time').val();
	var city_num 		= $('.giftForm').find('.city_num').val();

	if(user_name == '' || (/^[a-zA-Z ]{1,30}$/.test(user_name) == false && /^[\u4e00-\u9fa5]{1,10}$/.test(user_name) == false)) {
		$('.giftForm .user_name').closest('li').addClass('error');
		return false;
	} else if (mobile_number ==  '' || /^1\d{10}/.test(mobile_number) == false) {
		$('.giftForm .mobile_number').closest('li').addClass('error');
		return false;
	} else if (wechat_name != '' && /^[a-zA-Z0-9_]+$/.test(wechat_name) == false) {
		$('.giftForm .wechat_name').closest('li').addClass('error');
		return false;
	}

	$this.addClass('ajaxed');
	$.post('save_info.php',{
		user_name:user_name,
		mobile_number:mobile_number,
		wechat_name:wechat_name,
		score:score,
		play_time:play_time,
		city_num:city_num,
		1:1
	},function(rsp) {
		if (rsp == 'SUCCESS') {
			$('.giftForm').fadeOut(300);
			$('.shareTip').addClass('run');
			$('.shareBox').show().animate({opacity:1, top:0}, 500);
			$this.removeClass('ajaxed');
		}
	});
});
