<?php
require_once "weixin.php";
$jssdk = new WEIXIN("wx56bf927568b41f29", "13a14ee11e306822f6ec89ee983bb58f");
$signPackage = $jssdk->GetSignPackage();
?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="apple-touch-fullscreen" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta name="description" content="">
<title>Bally</title>
<link rel="stylesheet" type="text/css" href="css/style.css">

<script type="text/javascript">
	if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
		var version = parseFloat(RegExp.$1);
		if(version>2.3){
			var phoneScale = parseInt(window.screen.width)/750;
			document.write('<meta name="viewport" content="width=750, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
		}else{
			document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
		}
	}else{
		document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
	};
	
	//防止屏幕拖动
	document.documentElement.addEventListener('mousemove touchmove', function(e){ e.preventDefault(); });
</script>

</head>
<body>

	<section id="loading">
		<img src="imgs/logo_1.png" alt="Bally">
		<p>狂想中<span><em>.</em><em>.</em><em>.</em></span></p>
	</section>
	<section id="wrap">
		<canvas id="myCanvas" width="750" height="1206"></canvas>
	</section>
	
	<section id="content">

		<section class="slogan">
			<section class="box">
				<strong>都市狂想</strong>	
				<p>每个城市，都有独特风景<br>BALLY走遍全球，驻足风景之外<br>也将品牌文化融入其中<br>铸就独树一帜的都市地标<br><br>我们从中挑选出三座城市<br>邀您猜想,答对更可获取奖品</p>
			</section>
		</section>
		
		<button class="btnStart" type="button"><span>一起来猜</span></button>
		
		<a class="btnLink" href="http://catchme-game.com/heritage/"><span>探索BALLY</span></a>

		<section class="cityForm">
			<input type="text" placeholder="在此输入城市名"><button type="button"><span></span></button>
			<em class="arrowL"></em>
			<em class="arrowR"></em>
		</section>
		
		<section class="cityLondon">
			<section class="cityTip">
				<section class="box">
					<strong>+<em>1</em></strong>
					<p>恭喜！您答对了</p>
				</section>
			</section>
			<section class="cityInfo">
				<section class="box">
					<strong>伦敦</strong>
					<p>1981年，BALLY在伦敦开设了第一家海外店铺，并在2014年与顶尖建筑师合作，对该旗舰店进行重新设计和翻新，重现品牌独特个性和全新地位。</p>
					<button class="btnNext" type="button">下一个城市</button>
				</section>
			</section>
		</section>
		
		<section class="cityMilan">
			<section class="cityTip">
				<section class="box">
					<strong>+<em>1</em></strong>
					<p>恭喜！您答对了</p>
				</section>
			</section>
			<section class="cityInfo">
				<section class="box">
					<strong>米兰</strong>
					<p>今年三月，BALLY收购米兰皮革手工工坊Zagliani，工坊的熟练工匠将其精湛工艺和对品质的执着，运用到BALLY手袋系列中。</p>
					<button class="btnNext" type="button">下一个城市</button>
				</section>
			</section>
		</section>
		
		<section class="cityZurich">
			<section class="cityTip">
				<section class="box">
					<strong>+<em>1</em></strong>
					<p>恭喜！您答对了</p>
				</section>
			</section>
			<section class="cityInfo">
				<section class="box">
					<strong>苏黎世</strong>
					<p>苏黎世是瑞士的文化之都，位于苏黎世班霍夫大街的BALLY旗舰店有八十多年历史，是当地著名地标，吸引诸多游客前来参观；瑞士还是BALLY的发源地。</p>
					<button class="btnNext" type="button">查看总分</button>
				</section>
			</section>
		</section>
		
		<!-- 总分 -->
		<section class="score">
			<strong>12</strong>
			<p>您最后的得分</p>
			<button class="btnGift" type="button">奖品详情</button>
			<button class="btnAgain" type="button">再猜一次</button>
		</section>
		
		<!-- 礼品 -->
		<section class="giftForm">
			<section class="box">
				<section class="gift"><img src="imgs/gift_1.png" alt=""></section>
				
				<section class="info">
					<p>填写信息即有机会赢取<span>ECLIPSE</span></p>
					<ul>
						<li><input type="text" class="user_name" placeholder="姓名"></li>
						<li><input type="text" class="mobile_number" placeholder="手机"></li>
						<li><input type="text" class="wechat_name" placeholder="微信"></li>
						<li><input type="hidden" class="play_time" value="1"><input type="hidden" class="city_num" value="0"></li>
						<li><button class="btnSubmit" type="button">提交</button></li>
					</ul>
				</section>
				
			</section>
		</section>
		
		<!-- 提交成功，分享页面 -->
		<section class="shareBox"><img data-src="imgs/wx_code.png" alt=""></section>
		
		<!-- 分享提示 -->
		<section class="shareTip"><img data-src="imgs/shareTip.png" alt=""></section>
		
	</section>
	
	<section class="landscape"><img data-src="imgs/mobile.png" alt=""></section>
	
	<!--<section class="audio">
		<a href="javascript:;"></a>
		<audio id="audio" loop preload="auto">
			<source src="audio/audio.ogg" type="audio/ogg">
			<source src="audio/audio.mp3" type="audio/mpeg">
		</audio>
	</section>-->
	<script type="text/javascript">
		appId 		= '<?php echo $signPackage["appId"];?>';
        timestamp 	= <?php echo $signPackage["timestamp"];?>;
        nonceStr 	= '<?php echo $signPackage["nonceStr"];?>';
        signature 	= '<?php echo $signPackage["signature"];?>';

        shareContent = '猜猜我在哪座城';
        
	</script>
	
	<script src="js/jquery-2.1.3.min.js"></script>
	<script src="js/lufylegend-1.9.10.min.js"></script>
	<script src="js/common.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script src="js/backend.js"></script>
</body>
</html>