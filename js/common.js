var backLayer, city = 0, run = 1, score = 0, scoreAll = 0, length = 0, play = 0, playList = {},
	imgList = {}, 
	imgData = new Array(
		{name:"bg_1", path:"./imgs/page1_bg.jpg"},
		{name:"bg_2", path:"./imgs/page3_bg.jpg"}
	),
	imgLondon12 = {}, imgLondon15 = {}, imgLondon23 = {}, imgLondon25 = {}, imgLondon34 = {}, imgLondon35 = {}, imgLondon45 = {},
	imgDataLondon12 = new Array(
		{name:'0', path:"./imgs/city/london/12/0.jpg"},
		{name:'1', path:"./imgs/city/london/12/1.jpg"},
		{name:'2', path:"./imgs/city/london/12/2.jpg"},
		{name:'3', path:"./imgs/city/london/12/3.jpg"},
		{name:'4', path:"./imgs/city/london/12/4.jpg"},
		{name:'5', path:"./imgs/city/london/12/5.jpg"},
		{name:'6', path:"./imgs/city/london/12/6.jpg"},
		{name:'7', path:"./imgs/city/london/12/7.jpg"},
		{name:'8', path:"./imgs/city/london/12/8.jpg"},
		{name:'9', path:"./imgs/city/london/12/9.jpg"},
		{name:'10', path:"./imgs/city/london/12/10.jpg"},
		{name:'11', path:"./imgs/city/london/12/11.jpg"}
	),
	imgDataLondon15 = new Array(
		{name:'0', path:"./imgs/city/london/15/0.jpg"},
		{name:'1', path:"./imgs/city/london/15/1.jpg"},
		{name:'2', path:"./imgs/city/london/15/2.jpg"},
		{name:'3', path:"./imgs/city/london/15/3.jpg"},
		{name:'4', path:"./imgs/city/london/15/4.jpg"},
		{name:'5', path:"./imgs/city/london/15/5.jpg"},
		{name:'6', path:"./imgs/city/london/15/6.jpg"},
		{name:'7', path:"./imgs/city/london/15/7.jpg"},
		{name:'8', path:"./imgs/city/london/15/8.jpg"},
		{name:'9', path:"./imgs/city/london/15/9.jpg"},
		{name:'10', path:"./imgs/city/london/15/10.jpg"},
		{name:'11', path:"./imgs/city/london/15/11.jpg"}
	),
	imgDataLondon23 = new Array(
		{name:'0', path:"./imgs/city/london/23/0.jpg"},
		{name:'1', path:"./imgs/city/london/23/1.jpg"},
		{name:'2', path:"./imgs/city/london/23/2.jpg"},
		{name:'3', path:"./imgs/city/london/23/3.jpg"},
		{name:'4', path:"./imgs/city/london/23/4.jpg"},
		{name:'5', path:"./imgs/city/london/23/5.jpg"},
		{name:'6', path:"./imgs/city/london/23/6.jpg"},
		{name:'7', path:"./imgs/city/london/23/7.jpg"},
		{name:'8', path:"./imgs/city/london/23/8.jpg"},
		{name:'9', path:"./imgs/city/london/23/9.jpg"},
		{name:'10', path:"./imgs/city/london/23/10.jpg"},
		{name:'11', path:"./imgs/city/london/23/11.jpg"}
	),
	imgDataLondon25 = new Array(
		{name:'0', path:"./imgs/city/london/25/0.jpg"},
		{name:'1', path:"./imgs/city/london/25/1.jpg"},
		{name:'2', path:"./imgs/city/london/25/2.jpg"},
		{name:'3', path:"./imgs/city/london/25/3.jpg"},
		{name:'4', path:"./imgs/city/london/25/4.jpg"},
		{name:'5', path:"./imgs/city/london/25/5.jpg"},
		{name:'6', path:"./imgs/city/london/25/6.jpg"},
		{name:'7', path:"./imgs/city/london/25/7.jpg"},
		{name:'8', path:"./imgs/city/london/25/8.jpg"},
		{name:'9', path:"./imgs/city/london/25/9.jpg"},
		{name:'10', path:"./imgs/city/london/25/10.jpg"},
		{name:'11', path:"./imgs/city/london/25/11.jpg"}
	),
	imgDataLondon34 = new Array(
		{name:'0', path:"./imgs/city/london/34/0.jpg"},
		{name:'1', path:"./imgs/city/london/34/1.jpg"},
		{name:'2', path:"./imgs/city/london/34/2.jpg"},
		{name:'3', path:"./imgs/city/london/34/3.jpg"},
		{name:'4', path:"./imgs/city/london/34/4.jpg"},
		{name:'5', path:"./imgs/city/london/34/5.jpg"},
		{name:'6', path:"./imgs/city/london/34/6.jpg"},
		{name:'7', path:"./imgs/city/london/34/7.jpg"},
		{name:'8', path:"./imgs/city/london/34/8.jpg"},
		{name:'9', path:"./imgs/city/london/34/9.jpg"},
		{name:'10', path:"./imgs/city/london/34/10.jpg"},
		{name:'11', path:"./imgs/city/london/34/11.jpg"}
	),
	imgDataLondon35 = new Array(
		{name:'0', path:"./imgs/city/london/35/0.jpg"},
		{name:'1', path:"./imgs/city/london/35/1.jpg"},
		{name:'2', path:"./imgs/city/london/35/2.jpg"},
		{name:'3', path:"./imgs/city/london/35/3.jpg"},
		{name:'4', path:"./imgs/city/london/35/4.jpg"},
		{name:'5', path:"./imgs/city/london/35/5.jpg"},
		{name:'6', path:"./imgs/city/london/35/6.jpg"},
		{name:'7', path:"./imgs/city/london/35/7.jpg"},
		{name:'8', path:"./imgs/city/london/35/8.jpg"},
		{name:'9', path:"./imgs/city/london/35/9.jpg"},
		{name:'10', path:"./imgs/city/london/35/10.jpg"},
		{name:'11', path:"./imgs/city/london/35/11.jpg"}
	),
	imgDataLondon45 = new Array(
		{name:'0', path:"./imgs/city/london/45/0.jpg"},
		{name:'1', path:"./imgs/city/london/45/1.jpg"},
		{name:'2', path:"./imgs/city/london/45/2.jpg"},
		{name:'3', path:"./imgs/city/london/45/3.jpg"},
		{name:'4', path:"./imgs/city/london/45/4.jpg"},
		{name:'5', path:"./imgs/city/london/45/5.jpg"},
		{name:'6', path:"./imgs/city/london/45/6.jpg"},
		{name:'7', path:"./imgs/city/london/45/7.jpg"},
		{name:'8', path:"./imgs/city/london/45/8.jpg"},
		{name:'9', path:"./imgs/city/london/45/9.jpg"},
		{name:'10', path:"./imgs/city/london/45/10.jpg"}
	),
	
	imgMilan12 = {}, imgMilan15 = {}, imgMilan23 = {}, imgMilan25 = {}, imgMilan34 = {}, imgMilan35 = {}, imgMilan45 = {},
	imgDataMilan12 = new Array(
		{name:'0', path:"./imgs/city/milan/12/0.jpg"},
		{name:'1', path:"./imgs/city/milan/12/1.jpg"},
		{name:'2', path:"./imgs/city/milan/12/2.jpg"},
		{name:'3', path:"./imgs/city/milan/12/3.jpg"},
		{name:'4', path:"./imgs/city/milan/12/4.jpg"},
		{name:'5', path:"./imgs/city/milan/12/5.jpg"},
		{name:'6', path:"./imgs/city/milan/12/6.jpg"},
		{name:'7', path:"./imgs/city/milan/12/7.jpg"},
		{name:'8', path:"./imgs/city/milan/12/8.jpg"},
		{name:'9', path:"./imgs/city/milan/12/9.jpg"},
		{name:'10', path:"./imgs/city/milan/12/10.jpg"},
		{name:'11', path:"./imgs/city/milan/12/11.jpg"}
	),
	imgDataMilan15 = new Array(
		{name:'0', path:"./imgs/city/milan/15/0.jpg"},
		{name:'1', path:"./imgs/city/milan/15/1.jpg"},
		{name:'2', path:"./imgs/city/milan/15/2.jpg"},
		{name:'3', path:"./imgs/city/milan/15/3.jpg"},
		{name:'4', path:"./imgs/city/milan/15/4.jpg"},
		{name:'5', path:"./imgs/city/milan/15/5.jpg"},
		{name:'6', path:"./imgs/city/milan/15/6.jpg"},
		{name:'7', path:"./imgs/city/milan/15/7.jpg"},
		{name:'8', path:"./imgs/city/milan/15/8.jpg"},
		{name:'9', path:"./imgs/city/milan/15/9.jpg"},
		{name:'10', path:"./imgs/city/milan/15/10.jpg"},
		{name:'11', path:"./imgs/city/milan/15/11.jpg"}
	),
	imgDataMilan23 = new Array(
		{name:'0', path:"./imgs/city/milan/23/0.jpg"},
		{name:'1', path:"./imgs/city/milan/23/1.jpg"},
		{name:'2', path:"./imgs/city/milan/23/2.jpg"},
		{name:'3', path:"./imgs/city/milan/23/3.jpg"},
		{name:'4', path:"./imgs/city/milan/23/4.jpg"},
		{name:'5', path:"./imgs/city/milan/23/5.jpg"},
		{name:'6', path:"./imgs/city/milan/23/6.jpg"},
		{name:'7', path:"./imgs/city/milan/23/7.jpg"},
		{name:'8', path:"./imgs/city/milan/23/8.jpg"},
		{name:'9', path:"./imgs/city/milan/23/9.jpg"},
		{name:'10', path:"./imgs/city/milan/23/10.jpg"},
		{name:'11', path:"./imgs/city/milan/23/11.jpg"}
	),
	imgDataMilan25 = new Array(
		{name:'0', path:"./imgs/city/milan/25/0.jpg"},
		{name:'1', path:"./imgs/city/milan/25/1.jpg"},
		{name:'2', path:"./imgs/city/milan/25/2.jpg"},
		{name:'3', path:"./imgs/city/milan/25/3.jpg"},
		{name:'4', path:"./imgs/city/milan/25/4.jpg"},
		{name:'5', path:"./imgs/city/milan/25/5.jpg"},
		{name:'6', path:"./imgs/city/milan/25/6.jpg"},
		{name:'7', path:"./imgs/city/milan/25/7.jpg"},
		{name:'8', path:"./imgs/city/milan/25/8.jpg"},
		{name:'9', path:"./imgs/city/milan/25/9.jpg"},
		{name:'10', path:"./imgs/city/milan/25/10.jpg"},
		{name:'11', path:"./imgs/city/milan/25/11.jpg"}
	),
	imgDataMilan34 = new Array(
		{name:'0', path:"./imgs/city/milan/34/0.jpg"},
		{name:'1', path:"./imgs/city/milan/34/1.jpg"},
		{name:'2', path:"./imgs/city/milan/34/2.jpg"},
		{name:'3', path:"./imgs/city/milan/34/3.jpg"},
		{name:'4', path:"./imgs/city/milan/34/4.jpg"},
		{name:'5', path:"./imgs/city/milan/34/5.jpg"},
		{name:'6', path:"./imgs/city/milan/34/6.jpg"},
		{name:'7', path:"./imgs/city/milan/34/7.jpg"},
		{name:'8', path:"./imgs/city/milan/34/8.jpg"},
		{name:'9', path:"./imgs/city/milan/34/9.jpg"},
		{name:'10', path:"./imgs/city/milan/34/10.jpg"},
		{name:'11', path:"./imgs/city/milan/34/11.jpg"}
	),
	imgDataMilan35 = new Array(
		{name:'0', path:"./imgs/city/milan/35/0.jpg"},
		{name:'1', path:"./imgs/city/milan/35/1.jpg"},
		{name:'2', path:"./imgs/city/milan/35/2.jpg"},
		{name:'3', path:"./imgs/city/milan/35/3.jpg"},
		{name:'4', path:"./imgs/city/milan/35/4.jpg"},
		{name:'5', path:"./imgs/city/milan/35/5.jpg"},
		{name:'6', path:"./imgs/city/milan/35/6.jpg"},
		{name:'7', path:"./imgs/city/milan/35/7.jpg"},
		{name:'8', path:"./imgs/city/milan/35/8.jpg"},
		{name:'9', path:"./imgs/city/milan/35/9.jpg"},
		{name:'10', path:"./imgs/city/milan/35/10.jpg"},
		{name:'11', path:"./imgs/city/milan/35/11.jpg"}
	),
	imgDataMilan45 = new Array(
		{name:'0', path:"./imgs/city/milan/45/0.jpg"},
		{name:'1', path:"./imgs/city/milan/45/1.jpg"},
		{name:'2', path:"./imgs/city/milan/45/2.jpg"},
		{name:'3', path:"./imgs/city/milan/45/3.jpg"},
		{name:'4', path:"./imgs/city/milan/45/4.jpg"},
		{name:'5', path:"./imgs/city/milan/45/5.jpg"},
		{name:'6', path:"./imgs/city/milan/45/6.jpg"},
		{name:'7', path:"./imgs/city/milan/45/7.jpg"},
		{name:'8', path:"./imgs/city/milan/45/8.jpg"},
		{name:'9', path:"./imgs/city/milan/45/9.jpg"},
		{name:'10', path:"./imgs/city/milan/45/10.jpg"}
	),
	
	imgZurich12 = {}, imgZurich15 = {}, imgZurich23 = {}, imgZurich25 = {}, imgZurich34 = {}, imgZurich35 = {}, imgZurich45 = {},
	imgDataZurich12 = new Array(
		{name:'0', path:"./imgs/city/zurich/12/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/12/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/12/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/12/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/12/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/12/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/12/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/12/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/12/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/12/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/12/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/12/11.jpg"}
	),
	imgDataZurich15 = new Array(
		{name:'0', path:"./imgs/city/zurich/15/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/15/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/15/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/15/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/15/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/15/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/15/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/15/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/15/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/15/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/15/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/15/11.jpg"}
	),
	imgDataZurich23 = new Array(
		{name:'0', path:"./imgs/city/zurich/23/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/23/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/23/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/23/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/23/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/23/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/23/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/23/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/23/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/23/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/23/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/23/11.jpg"}
	),
	imgDataZurich25 = new Array(
		{name:'0', path:"./imgs/city/zurich/25/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/25/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/25/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/25/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/25/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/25/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/25/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/25/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/25/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/25/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/25/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/25/11.jpg"}
	),
	imgDataZurich34 = new Array(
		{name:'0', path:"./imgs/city/zurich/34/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/34/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/34/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/34/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/34/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/34/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/34/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/34/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/34/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/34/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/34/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/34/11.jpg"}
	),
	imgDataZurich35 = new Array(
		{name:'0', path:"./imgs/city/zurich/35/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/35/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/35/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/35/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/35/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/35/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/35/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/35/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/35/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/35/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/35/10.jpg"},
		{name:'11', path:"./imgs/city/zurich/35/11.jpg"}
	),
	imgDataZurich45 = new Array(
		{name:'0', path:"./imgs/city/zurich/45/0.jpg"},
		{name:'1', path:"./imgs/city/zurich/45/1.jpg"},
		{name:'2', path:"./imgs/city/zurich/45/2.jpg"},
		{name:'3', path:"./imgs/city/zurich/45/3.jpg"},
		{name:'4', path:"./imgs/city/zurich/45/4.jpg"},
		{name:'5', path:"./imgs/city/zurich/45/5.jpg"},
		{name:'6', path:"./imgs/city/zurich/45/6.jpg"},
		{name:'7', path:"./imgs/city/zurich/45/7.jpg"},
		{name:'8', path:"./imgs/city/zurich/45/8.jpg"},
		{name:'9', path:"./imgs/city/zurich/45/9.jpg"},
		{name:'10', path:"./imgs/city/zurich/45/10.jpg"}
	);
	
function main(){
	LGlobal.align = LStageAlign.MIDDLE;
	LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	LGlobal.preventDefault = false;
	LSystem.screen(LStage.FULL_SCREEN);
	
	//游戏逐层初始化
	backLayer = new LSprite();
	backLayer.graphics.drawRect(1, "#ffffff", [0, 0, window.innerWidth, window.innerHeight], true, "#ffffff");
	addChild(backLayer);
	
	LLoadManage.load(imgData, function(progress){}, bInit);
};
function bInit(result){
	imgList = result;
	
	//背景图片显示
	var loadBg = new LBitmap(new LBitmapData(imgList["bg_1"]));
	backLayer.addChild(loadBg);
		
	LLoadManage.load(imgDataLondon12, function(progress){}, bLondon12);
	LLoadManage.load(imgDataLondon15, function(progress){}, bLondon15);
	LLoadManage.load(imgDataLondon23, function(progress){}, bLondon23);
	LLoadManage.load(imgDataLondon25, function(progress){}, bLondon25);
	LLoadManage.load(imgDataLondon34, function(progress){}, bLondon34);
	LLoadManage.load(imgDataLondon35, function(progress){}, bLondon35);
	LLoadManage.load(imgDataLondon45, function(progress){}, bLondon45);
	
	LLoadManage.load(imgDataMilan12, function(progress){}, bMilan12);
	LLoadManage.load(imgDataMilan15, function(progress){}, bMilan15);
	LLoadManage.load(imgDataMilan23, function(progress){}, bMilan23);
	LLoadManage.load(imgDataMilan25, function(progress){}, bMilan25);
	LLoadManage.load(imgDataMilan34, function(progress){}, bMilan34);
	LLoadManage.load(imgDataMilan35, function(progress){}, bMilan35);
	LLoadManage.load(imgDataMilan45, function(progress){}, bMilan45);
	
	LLoadManage.load(imgDataZurich12, function(progress){}, bZurich12);
	LLoadManage.load(imgDataZurich15, function(progress){}, bZurich15);
	LLoadManage.load(imgDataZurich23, function(progress){}, bZurich23);
	LLoadManage.load(imgDataZurich25, function(progress){}, bZurich25);
	LLoadManage.load(imgDataZurich34, function(progress){}, bZurich34);
	LLoadManage.load(imgDataZurich35, function(progress){}, bZurich35);
	LLoadManage.load(imgDataZurich45, function(progress){}, bZurich45);
};

function bLondon12(result){ imgLondon12 = result; };
function bLondon15(result){ imgLondon15 = result; };
function bLondon23(result){ imgLondon23 = result; };
function bLondon25(result){ imgLondon25 = result; };
function bLondon34(result){ imgLondon34 = result; };
function bLondon35(result){ imgLondon35 = result; };
function bLondon45(result){ imgLondon45 = result; };

function bMilan12(result){ imgMilan12 = result; };
function bMilan15(result){ imgMilan15 = result; };
function bMilan23(result){ imgMilan23 = result; };
function bMilan25(result){ imgMilan25 = result; };
function bMilan34(result){ imgMilan34 = result; };
function bMilan35(result){ imgMilan35 = result; };
function bMilan45(result){ imgMilan45 = result; };

function bZurich12(result){ imgZurich12 = result; };
function bZurich15(result){ imgZurich15 = result; };
function bZurich23(result){ imgZurich23 = result; };
function bZurich25(result){ imgZurich25 = result; };
function bZurich34(result){ imgZurich34 = result; };
function bZurich35(result){ imgZurich35 = result; };
function bZurich45(result){ imgZurich45 = result; };

function step_1(){
	$('.slogan, .btnStart, .btnLink').addClass('run');
};

function step_2(){
	$('.slogan, .btnStart, .btnLink').fadeOut(300, function(){
		$(this).remove();
	});
	
	setTimeout(function(){
		
		//背景层清空
		backLayer.die();
		backLayer.removeAllChild();
		
		//城市 London
		var loadBg = new LBitmap(new LBitmapData(imgLondon12["0"]));
		backLayer.addChild(loadBg);
		
		$('.cityForm').addClass('run').data('val', '伦敦');
		city = 0;
		run = 1;
		
	}, 300);
	
}

function cityRun(){
	if(run == 1 || run == 3 || run == 5 || run == 7){
		$('button span','.cityForm').removeAttr('class').addClass('run' + (run-1) / 2);
	}
	
	if(run == 8){
		$('button span', '.cityForm').removeAttr('class').addClass('run4');
		$('input','.cityForm').val('');
		cityEnd();
		run = 0;
		return false;
	}
	
	play = 0;
	if(city == 0){
		switch (run){
			case 1:
				length = imgLondon12.length;
				playList = imgLondon12;
				run = 3;
			break;
			case 2:
				length = imgLondon15.length;
				playList = imgLondon15;
				run = 0;
				score += 5;
			break;
			case 3:
				length = imgLondon23.length;
				playList = imgLondon23;
				run = 5;
			break;
			case 4:
				length = imgLondon25.length;
				playList = imgLondon25;
				run = 0;
				score += 4;
			break;
			case 5:
				length = imgLondon34.length;
				playList = imgLondon34;
				run = 7;
			break;
			case 6:
				length = imgLondon35.length;
				playList = imgLondon35;
				run = 0;
				score += 3;
			break;
			case 7:
				length = imgLondon45.length;
				playList = imgLondon45;
				run = 8;
			break;
		}
	}else if(city == 1){
		switch (run){
			case 1:
				length = imgMilan12.length;
				playList = imgMilan12;
				run = 3;
			break;
			case 2:
				length = imgMilan15.length;
				playList = imgMilan15;
				run = 0;
				score += 5;
			break;
			case 3:
				length = imgMilan23.length;
				playList = imgMilan23;
				run = 5;
			break;
			case 4:
				length = imgMilan25.length;
				playList = imgMilan25;
				run = 0;
				score += 4;
			break;
			case 5:
				length = imgMilan34.length;
				playList = imgMilan34;
				run = 7;
			break;
			case 6:
				length = imgMilan35.length;
				playList = imgMilan35;
				run = 0;
				score += 3;
			break;
			case 7:
				length = imgMilan45.length;
				playList = imgMilan45;
				run = 8;
			break;
		}
	}else if(city == 2){
		switch (run){
			case 1:
				length = imgZurich12.length;
				playList = imgZurich12;
				run = 3;
			break;
			case 2:
				length = imgZurich15.length;
				playList = imgZurich15;
				run = 0;
				score += 5;
			break;
			case 3:
				length = imgZurich23.length;
				playList = imgZurich23;
				run = 5;
			break;
			case 4:
				length = imgZurich25.length;
				playList = imgZurich25;
				run = 0;
				score += 4;
			break;
			case 5:
				length = imgZurich34.length;
				playList = imgZurich34;
				run = 7;
			break;
			case 6:
				length = imgZurich35.length;
				playList = imgZurich35;
				run = 0;
				score += 3;
			break;
			case 7:
				length = imgZurich45.length;
				playList = imgZurich45;
				run = 8;
			break;
		}
	}
	
	backLayer.addEventListener(LEvent.ENTER_FRAME, onFrame);
}
function onFrame(){
	
	backLayer.removeAllChild();
	
	//城市 London
	var loadBg = new LBitmap(new LBitmapData(playList[String(play)]));
	
	
	backLayer.addChild(loadBg);
	
	play ++;
	if(play >= length){
		backLayer.die();
		$('input','.cityForm').val('');
		
		if(run == 0){
			cityEnd();
		}
	};
}
function cityEnd(){
	console.log(score);
	$('.cityForm').removeClass('run');
	var obj;
	if(city==0){
		obj = $('.cityLondon');
	}else if(city==1){
		obj = $('.cityMilan');
	}else if(city==2){
		obj = $('.cityZurich');
	}else{
		return false;
	}
	
	scoreAll += score;
	
	$('.cityTip strong em', obj).html(score);
	
	if(score == 0){
		$('.cityTip p', obj).html('你没有猜对，这座城市是：'+ $('.cityForm').data('val'));
	}
	
	obj.css('z-index', 3);
	$('.cityTip', obj).show().animate({opacity:1, marginTop:-510}, 500);
	$('.cityInfo', obj).delay(500).fadeIn(0).animate({opacity:1, marginTop:-134}, 500);
};

function changeCity(){
	var loadBg;
	score = 0;
	run = 1;
	$('button span', '.cityForm').removeAttr('class');
	if(city==0){
		$('.cityLondon').css('z-index', 0).children().fadeOut(300);
		
		//城市 Milan
		loadBg = new LBitmap(new LBitmapData(imgMilan12["0"]));
		$('.cityForm').addClass('run').data('val', '米兰');
		
		city = 1;
	}else if(city==1){
		$('.cityMilan').css('z-index', 0).children().fadeOut(300);
		
		//城市 Milan
		var loadBg = new LBitmap(new LBitmapData(imgZurich12["0"]));
		backLayer.addChild(loadBg);
		
		$('.cityForm').addClass('run').data('val', '苏黎世');
		
		city = 2;
	}else if(city==2){
		$('.cityZurich').css('z-index', 0).children().fadeOut(300);
		
		loadBg = new LBitmap(new LBitmapData(imgList["bg_2"]));
		city = 3;
	}else{
		return false;
	}
	
	//背景层清空
	backLayer.die();
	backLayer.removeAllChild();
	backLayer.addChild(loadBg);
	
	if(city == 3){
		$('.score').find('strong').html(scoreAll);
		$('.score').show().animate({opacity:1,marginTop:-367}, 500);
	};
};

init(60, 'wrap', window.innerWidth, window.innerHeight, main); //初始化框架


$(function(){
	
	$(window).trigger('orientationchange');
	
	var bgRun = setInterval(function(){
		$('#loading').hasClass('run')? $('#loading').removeClass('run') : $('#loading').addClass('run');
	}, 200);
	
	var dot=0;
	var dotRun = setInterval(function(){
		$('em', '#loading').eq(dot).show();
		dot++;
		if(dot > 3){
			dot = 0;
			$('em', '#loading').hide();
		}
	}, 500);
	
	
	var imgs = [
		"logo_1.png", "spriteBg.jpg", "page1_bg.jpg", "page3_bg.jpg", "arrow.png", "btnFull.png", "btnEmpty.png", "mobile.png", 
		"spriteCityCont_1.png", "spriteCityCont_2.png", "spriteScore.png", "wx_code.png", "shareTip.png",
		"city/london/12/0.jpg", "city/london/12/1.jpg", "city/london/12/2.jpg", "city/london/12/3.jpg", "city/london/12/4.jpg", "city/london/12/5.jpg",
		"city/london/12/6.jpg", "city/london/12/7.jpg", "city/london/12/8.jpg", "city/london/12/9.jpg", "city/london/12/10.jpg", "city/london/12/11.jpg",
		"city/london/15/0.jpg", "city/london/15/1.jpg", "city/london/15/2.jpg", "city/london/15/3.jpg", "city/london/15/4.jpg", "city/london/15/5.jpg",
		"city/london/15/6.jpg", "city/london/15/7.jpg", "city/london/15/8.jpg", "city/london/15/9.jpg", "city/london/15/10.jpg", "city/london/15/11.jpg",
		"city/london/23/0.jpg", "city/london/23/1.jpg", "city/london/23/2.jpg", "city/london/23/3.jpg", "city/london/23/4.jpg", "city/london/23/5.jpg",
		"city/london/23/6.jpg", "city/london/23/7.jpg", "city/london/23/8.jpg", "city/london/23/9.jpg", "city/london/23/10.jpg", "city/london/23/11.jpg"
	];

	$.preloadimg(imgs, function(){
		$("img").each(function(index, element) {
			$(this).attr("src", $(this).data("src"));
		});
		
		$("#loading").delay(500).fadeOut(300,function(){
			clearInterval(bgRun,dotRun);
			$(this).remove();
			step_1();
		});
	});	
	
	$('.btnStart').on('click', function(){
		step_2();
	});
	
	$('.cityForm').on('click', 'button', function(){
		var value = $(this).siblings('input').val(),
			answer = $(this).parent().data('val');
			
		if($.trim(value) == ''){
			$(this).siblings('input').focus();
			return false;
		};
		
		if(value == answer){
			switch (run){
				case 1:
					run = 2;
					break;
				case 3:
					run = 4;
					break;
				case 5:
					run = 6;
					break;
				case 8:
					score += 1;
					break;
			};
		}else{
			if(run == 8){
				score += 0;
			}
		}
		
		cityRun();
	});
	
	$('.btnNext').click(changeCity);
	
	$('.btnAgain').click(function(){
		score = 0;
		scoreAll = 0;
		city = 0;
		
		$('.score').fadeOut(300,function(){
			$(this).removeAttr('style');
		});
		
		$('p', '.cityTip').html('恭喜！您答对了');

		$('.giftForm .play_time').val(parseInt($('.giftForm .play_time').val()) + 1);
		
		$('.cityLondon, .cityMilan, .cityZurich').css('z-index', 0).children().removeAttr('style');
		
		step_2();
	});
	
	$('.btnGift').click(function(){
		$('.score').fadeOut(300,function(){
			$(this).removeAttr('style');
		});
		$('.giftForm').show().animate({opacity:1, marginTop:-324}, 500);
	});
});

$(window).on("scroll.elasticity", function(e) {
	e.preventDefault()
}).on("touchmove.elasticity", function(e) {
	e.preventDefault()
}).bind('orientationchange', function(e){
	if (window.orientation == 0 || window.orientation == 180) {
		//orientation = 'portrait';
		$('.landscape').hide();
	}else if (window.orientation == 90 || window.orientation == -90) {
		//orientation = 'landscape';
		$('.landscape').show();
	}
	return false;
});

$.extend({
	isWeiXin : function(){
		var ua = window.navigator.userAgent.toLowerCase(); 
		return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false;
	},
	preloadimg : function(arr, comp){
		var flag = true,
			n = 0;
		var loadImg = function(src){
			var img = new Image();
			img.onload = function(){
				n++;
				var t = Math.round(n/l*100);
				//$("#loading span").text(t+"%");
				if(t >= 97 && flag){
					comp();
					flag = false;
				}
			}
			img.src = src;
		}
		if(typeof(arr) == "string"){
			var l = 1;
			var w = new loadImg(arr);
		}else{
			var l = arr.length;
			for(var i=0;i<l;i++){
				var w = new loadImg("imgs/" + arr[i]);
			}
		}
	}
});
