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
	var user_name 		= $('.giftForm').find('.user_name').val();
	var mobile_number 	= $('.giftForm').find('.mobile_number').val();
	var wechat_name 	= $('.giftForm').find('.wechat_name').val();
	var score 			= $('.score').find('strong').html();
	var play_time 		= $('.giftForm').find('.play_time').val();
	$this.addClass('ajaxed');
	$.post('save_info.php',{
		user_name:user_name,
		mobile_number:mobile_number,
		wechat_name:wechat_name,
		score:score,
		play_time:play_time,
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

function isWeixinBrowser(){
    var ua = navigator.userAgent.toLowerCase();
    return (/micromessenger/.test(ua)) ? true : false ;
}
if (isWeixinBrowser()) {
	wx.config({
	    appId: appId,
	    timestamp: timestamp,
	    nonceStr: nonceStr,
	    signature: signature,
	    jsApiList: [
	        'onMenuShareTimeline','onMenuShareAppMessage'
	    ]
	});

	wx.ready(function () {
	    wx.onMenuShareTimeline({
	        title: '城市狂想', // 分享标题
	        link: 'http://bally-goldenweek.ffshtest.net/index.php', // 分享链接
	        imgUrl: '../imgs/share_cover.jpg', // 分享图标
	        success: function () {
	        },
	        cancel: function () {
	        }
	    });
	    wx.onMenuShareAppMessage({
	        title: '城市狂想', // 分享标题
	        desc: shareContent, // 分享描述
	        link: 'http://bally-goldenweek.ffshtest.net/index.php', // 分享链接
	        imgUrl: '../imgs/share_cover.jpg', // 分享图标
	        type: '', // 分享类型,music、video或link，不填默认为link
	        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	        success: function () { 
	            // 用户确认分享后执行的回调函数
	        },
	        cancel: function () { 
	            // 用户取消分享后执行的回调函数
	        }
	    });
	});
}
