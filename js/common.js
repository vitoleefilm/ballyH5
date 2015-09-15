init(60, 'wrap', window.innerWidth, window.innerHeight, main); //初始化框架

var backLayer, background, treeLayer, treeBg, codeLayer, codeBg, audio, cloud, resultCity=[], 
	city = 0, run = 1, score = 0, scoreAll = 0, length = 0, play = 0, tree = 0, code = 0,
	imgList = {}, playList = {}, treeList = {}, codeList = {},
	imgData = new Array(
		{name:"bg_2", path:"./imgs/page3_bg.jpg"},
		{name:"audioLondon",path:"./audios/audioLondon.mp3"},
		{name:"audioMilan",path:"./audios/audioMilan.mp3"},
		{name:"audioZurich",path:"./audios/audioZurich.mp3"},
		{name:"audioWind",path:"./audios/audioWind.mp3"}
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
	),
	
	imgTree4 = {}, imgTree5 = {}, imgTree15 = {}, imgTree25 = {}, imgTree34 = {}, imgTree35 = {}, imgTree45 = {}, 
	imgDataTree4 = new Array(
		{name:'0', path:"./imgs/tree/milan/4/0.png"}, {name:'1', path:"./imgs/tree/milan/4/1.png"}, {name:'2', path:"./imgs/tree/milan/4/2.png"},
		{name:'3', path:"./imgs/tree/milan/4/3.png"}, {name:'4', path:"./imgs/tree/milan/4/4.png"}, {name:'5', path:"./imgs/tree/milan/4/5.png"},
		{name:'6', path:"./imgs/tree/milan/4/6.png"}, {name:'7', path:"./imgs/tree/milan/4/7.png"}, {name:'8', path:"./imgs/tree/milan/4/8.png"},
		{name:'9', path:"./imgs/tree/milan/4/9.png"}, {name:'10', path:"./imgs/tree/milan/4/10.png"}, {name:'11', path:"./imgs/tree/milan/4/11.png"},
		{name:'12', path:"./imgs/tree/milan/4/12.png"}, {name:'13', path:"./imgs/tree/milan/4/13.png"}, {name:'14', path:"./imgs/tree/milan/4/14.png"},
		{name:'15', path:"./imgs/tree/milan/4/15.png"}, {name:'16', path:"./imgs/tree/milan/4/16.png"}, {name:'17', path:"./imgs/tree/milan/4/17.png"},
		{name:'18', path:"./imgs/tree/milan/4/18.png"}, {name:'19', path:"./imgs/tree/milan/4/19.png"}
	),
	imgDataTree5 = new Array(
		{name:'0', path:"./imgs/tree/milan/5/0.png"}, {name:'1', path:"./imgs/tree/milan/5/1.png"}, {name:'2', path:"./imgs/tree/milan/5/2.png"},
		{name:'3', path:"./imgs/tree/milan/5/3.png"}, {name:'4', path:"./imgs/tree/milan/5/4.png"}, {name:'5', path:"./imgs/tree/milan/5/5.png"},
		{name:'6', path:"./imgs/tree/milan/5/6.png"}, {name:'7', path:"./imgs/tree/milan/5/7.png"}, {name:'8', path:"./imgs/tree/milan/5/8.png"},
		{name:'9', path:"./imgs/tree/milan/5/9.png"}, {name:'10', path:"./imgs/tree/milan/5/10.png"}, {name:'11', path:"./imgs/tree/milan/5/11.png"},
		{name:'12', path:"./imgs/tree/milan/5/12.png"}, {name:'13', path:"./imgs/tree/milan/5/13.png"}, {name:'14', path:"./imgs/tree/milan/5/14.png"},
		{name:'15', path:"./imgs/tree/milan/5/15.png"}, {name:'16', path:"./imgs/tree/milan/5/16.png"}, {name:'17', path:"./imgs/tree/milan/5/17.png"},
		{name:'18', path:"./imgs/tree/milan/5/18.png"}, {name:'19', path:"./imgs/tree/milan/5/19.png"}
	),
	imgDataTree15 = new Array(
		{name:'0', path:"./imgs/tree/milan/15/0.png"}, {name:'1', path:"./imgs/tree/milan/15/1.png"}, {name:'2', path:"./imgs/tree/milan/15/2.png"},
		{name:'3', path:"./imgs/tree/milan/15/3.png"}, {name:'4', path:"./imgs/tree/milan/15/4.png"}, {name:'5', path:"./imgs/tree/milan/15/5.png"}
	),
	imgDataTree25 = new Array(
		{name:'0', path:"./imgs/tree/milan/25/0.png"}, {name:'1', path:"./imgs/tree/milan/25/1.png"}, {name:'2', path:"./imgs/tree/milan/25/2.png"},
		{name:'3', path:"./imgs/tree/milan/25/3.png"}, {name:'4', path:"./imgs/tree/milan/25/4.png"}, {name:'5', path:"./imgs/tree/milan/25/5.png"}
	),
	imgDataTree34 = new Array(
		{name:'0', path:"./imgs/tree/milan/34/0.png"}, {name:'1', path:"./imgs/tree/milan/34/1.png"}, {name:'2', path:"./imgs/tree/milan/34/2.png"},
		{name:'3', path:"./imgs/tree/milan/34/3.png"}, {name:'4', path:"./imgs/tree/milan/34/4.png"}, {name:'5', path:"./imgs/tree/milan/34/5.png"}, 
		{name:'6', path:"./imgs/tree/milan/34/6.png"}
	),
	imgDataTree35 = new Array(
		{name:'0', path:"./imgs/tree/milan/35/0.png"}, {name:'1', path:"./imgs/tree/milan/35/1.png"}, {name:'2', path:"./imgs/tree/milan/35/2.png"},
		{name:'3', path:"./imgs/tree/milan/35/3.png"}, {name:'4', path:"./imgs/tree/milan/35/4.png"}, {name:'5', path:"./imgs/tree/milan/35/5.png"}, 
		{name:'6', path:"./imgs/tree/milan/45/6.png"}
	),
	imgDataTree45 = new Array(
		{name:'0', path:"./imgs/tree/milan/45/0.png"}, {name:'1', path:"./imgs/tree/milan/45/1.png"}, {name:'2', path:"./imgs/tree/milan/45/2.png"},
		{name:'3', path:"./imgs/tree/milan/45/3.png"}, {name:'4', path:"./imgs/tree/milan/45/4.png"}, {name:'5', path:"./imgs/tree/milan/45/5.png"}, 
		{name:'6', path:"./imgs/tree/milan/45/6.png"}
	),
	
	imgCode01 = {}, imgCode02 = {}, imgCode11 = {}, imgCode12 = {}, imgCode21 = {}, imgCode22 = {},
	imgDataCode01 = new Array(
		{name:'0', path:"./imgs/code/london/1/0.png"}, {name:'1', path:"./imgs/code/london/1/1.png"}, {name:'2', path:"./imgs/code/london/1/2.png"},
		{name:'3', path:"./imgs/code/london/1/3.png"}, {name:'4', path:"./imgs/code/london/1/4.png"}, {name:'5', path:"./imgs/code/london/1/5.png"},
		{name:'6', path:"./imgs/code/london/1/6.png"}, {name:'7', path:"./imgs/code/london/1/7.png"}, {name:'8', path:"./imgs/code/london/1/8.png"},
		{name:'9', path:"./imgs/code/london/1/9.png"}
	),
	imgDataCode02 = new Array(
		{name:'0', path:"./imgs/code/london/2/0.png"}, {name:'1', path:"./imgs/code/london/2/1.png"}, {name:'2', path:"./imgs/code/london/2/2.png"},
		{name:'3', path:"./imgs/code/london/2/3.png"}, {name:'4', path:"./imgs/code/london/2/4.png"}, {name:'5', path:"./imgs/code/london/2/5.png"},
		{name:'6', path:"./imgs/code/london/2/6.png"}, {name:'7', path:"./imgs/code/london/2/7.png"}, {name:'8', path:"./imgs/code/london/2/8.png"},
		{name:'9', path:"./imgs/code/london/2/9.png"}, {name:'10', path:"./imgs/code/london/2/10.png"}
	),
	
	imgDataCode11 = new Array(
		{name:'0', path:"./imgs/code/milan/1/0.png"}, {name:'1', path:"./imgs/code/milan/1/1.png"}, {name:'2', path:"./imgs/code/milan/1/2.png"},
		{name:'3', path:"./imgs/code/milan/1/3.png"}, {name:'4', path:"./imgs/code/milan/1/4.png"}, {name:'5', path:"./imgs/code/milan/1/5.png"},
		{name:'6', path:"./imgs/code/milan/1/6.png"}, {name:'7', path:"./imgs/code/milan/1/7.png"}, {name:'8', path:"./imgs/code/milan/1/8.png"},
		{name:'9', path:"./imgs/code/milan/1/9.png"}
	),
	imgDataCode12 = new Array(
		{name:'0', path:"./imgs/code/milan/2/0.png"}, {name:'1', path:"./imgs/code/milan/2/1.png"}, {name:'2', path:"./imgs/code/milan/2/2.png"},
		{name:'3', path:"./imgs/code/milan/2/3.png"}, {name:'4', path:"./imgs/code/milan/2/4.png"}, {name:'5', path:"./imgs/code/milan/2/5.png"},
		{name:'6', path:"./imgs/code/milan/2/6.png"}, {name:'7', path:"./imgs/code/milan/2/7.png"}, {name:'8', path:"./imgs/code/milan/2/8.png"},
		{name:'9', path:"./imgs/code/milan/2/9.png"}
	),
	
	imgDataCode21 = new Array(
		{name:'0', path:"./imgs/code/zurich/1/0.png"}, {name:'1', path:"./imgs/code/zurich/1/1.png"}, {name:'2', path:"./imgs/code/zurich/1/2.png"},
		{name:'3', path:"./imgs/code/zurich/1/3.png"}, {name:'4', path:"./imgs/code/zurich/1/4.png"}, {name:'5', path:"./imgs/code/zurich/1/5.png"},
		{name:'6', path:"./imgs/code/zurich/1/6.png"}, {name:'7', path:"./imgs/code/zurich/1/7.png"}, {name:'8', path:"./imgs/code/zurich/1/8.png"},
		{name:'9', path:"./imgs/code/zurich/1/9.png"}
	),
	imgDataCode22 = new Array(
		{name:'0', path:"./imgs/code/zurich/2/0.png"}, {name:'1', path:"./imgs/code/zurich/2/1.png"}, {name:'2', path:"./imgs/code/zurich/2/2.png"},
		{name:'3', path:"./imgs/code/zurich/2/3.png"}, {name:'4', path:"./imgs/code/zurich/2/4.png"}, {name:'5', path:"./imgs/code/zurich/2/5.png"},
		{name:'6', path:"./imgs/code/zurich/2/6.png"}, {name:'7', path:"./imgs/code/zurich/2/7.png"}, {name:'8', path:"./imgs/code/zurich/2/8.png"},
		{name:'9', path:"./imgs/code/zurich/2/9.png"}
	);
	
function main(){
	LGlobal.align = LStageAlign.MIDDLE;
	LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	LGlobal.preventDefault = false;
	LSystem.screen(LStage.FULL_SCREEN);
	LGlobal.setDebug(true);
	
	update();
    LGlobal.stage.addEventListener(LEvent.WINDOW_RESIZE, update);
	
	//游戏逐层初始化
	backLayer = new LSprite();
	addChild(backLayer);
	
	//树层
	treeLayer = new LSprite();
	addChild(treeLayer);
	
	//钮扣层
	codeLayer = new LSprite();
	addChild(codeLayer);
	
	//音频
	audio = new LSound();
	
	var loader = new LLoader();
	loader.addEventListener(LEvent.COMPLETE, function(event){
		//背景图片显示
		background = new LBitmap(new LBitmapData(event.target));
		backLayer.addChild(background);
		
		loadCityLondon();
		
		LLoadManage.load(imgData, function(progress){}, function(result){ imgList = result; });
	}); 
    loader.load("./imgs/page1_bg.jpg", "bitmapData");
};

function update(){
	LGlobal.resize(window.innerWidth, window.innerHeight);
	$('canvas').attr({'width':750, 'height':window.innerHeight});
};

function loadCityLondon(){
	LLoadManage.load(imgDataCode01, function(progress){}, function(result){ imgCode01 = result; });
	LLoadManage.load(imgDataCode02, function(progress){}, function(result){ imgCode02 = result; });
	
	LLoadManage.load(imgDataLondon12, function(progress){}, function(result){ imgLondon12 = result; });
	LLoadManage.load(imgDataLondon15, function(progress){}, function(result){ imgLondon15 = result; });
	LLoadManage.load(imgDataLondon23, function(progress){}, function(result){ imgLondon23 = result; });
	LLoadManage.load(imgDataLondon25, function(progress){}, function(result){ imgLondon25 = result; });
	LLoadManage.load(imgDataLondon34, function(progress){}, function(result){ imgLondon34 = result; });
	LLoadManage.load(imgDataLondon35, function(progress){}, function(result){ imgLondon35 = result; });
	LLoadManage.load(imgDataLondon45, function(progress){}, function(result){ imgLondon45 = result; loadCityMilan(); });
}

function loadCityMilan(){
	LLoadManage.load(imgDataCode11, function(progress){}, function(result){ imgCode11 = result; });
	LLoadManage.load(imgDataCode12, function(progress){}, function(result){ imgCode12 = result; });
	
	LLoadManage.load(imgDataMilan12, function(progress){}, function(result){ imgMilan12 = result; });
	LLoadManage.load(imgDataMilan15, function(progress){}, function(result){ imgMilan15 = result; });
	LLoadManage.load(imgDataMilan23, function(progress){}, function(result){ imgMilan23 = result; });
	LLoadManage.load(imgDataMilan25, function(progress){}, function(result){ imgMilan25 = result; });
	LLoadManage.load(imgDataMilan34, function(progress){}, function(result){ imgMilan34 = result; });
	LLoadManage.load(imgDataMilan35, function(progress){}, function(result){ imgMilan35 = result; });
	LLoadManage.load(imgDataMilan45, function(progress){}, function(result){ imgMilan45 = result; loadCityZurich(); });
}

function loadCityZurich(){
	LLoadManage.load(imgDataCode21, function(progress){}, function(result){ imgCode21 = result; });
	LLoadManage.load(imgDataCode22, function(progress){}, function(result){ imgCode22 = result; });
	
	LLoadManage.load(imgDataZurich12, function(progress){}, function(result){ imgZurich12 = result; });
	LLoadManage.load(imgDataZurich15, function(progress){}, function(result){ imgZurich15 = result; });
	LLoadManage.load(imgDataZurich23, function(progress){}, function(result){ imgZurich23 = result; });
	LLoadManage.load(imgDataZurich25, function(progress){}, function(result){ imgZurich25 = result; });
	LLoadManage.load(imgDataZurich34, function(progress){}, function(result){ imgZurich34 = result; });
	LLoadManage.load(imgDataZurich35, function(progress){}, function(result){ imgZurich35 = result; });
	LLoadManage.load(imgDataZurich45, function(progress){}, function(result){ imgZurich45 = result; });
}

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
		background = new LBitmap(new LBitmapData(imgLondon12["0"]));
		backLayer.addChild(background);
		
		audio.load(imgList['audioLondon']);
		audio.play(0, 100);
		
		codeList = imgCode01;
		codeLayer.addEventListener(LEvent.ENTER_FRAME, onCodeFrame);		
		
		$('.cityForm').addClass('run').data('val', '伦敦');
		city = 0;
		run = 1;
		
		LLoadManage.load(imgDataTree4, function(progress){}, function(result){ imgTree4 = result; });
		LLoadManage.load(imgDataTree5, function(progress){}, function(result){ imgTree5 = result; });
		LLoadManage.load(imgDataTree15, function(progress){}, function(result){ imgTree15 = result; });
		LLoadManage.load(imgDataTree25, function(progress){}, function(result){ imgTree25 = result; });
		LLoadManage.load(imgDataTree34, function(progress){}, function(result){ imgTree34 = result; });
		LLoadManage.load(imgDataTree35, function(progress){}, function(result){ imgTree35 = result; });
		LLoadManage.load(imgDataTree45, function(progress){}, function(result){ imgTree45 = result; });
		
	}, 300);
	
}


function cityRun(){
	codeList = {}, treeList = {};
	codeLayer.die(), treeLayer.die();
	codeLayer.removeAllChild(), treeLayer.removeAllChild();
	
	play = 0;
	code = 0;
	tree = 0;
	
	LGlobal.setFrameRate(60);
	
	if(run == 1 || run == 3 || run == 5 || run == 7){
		$('button span','.cityForm').removeAttr('class').addClass('run' + (run-1) / 2);
	}
	
	if(run == 8){
		$('button span', '.cityForm').removeAttr('class').addClass('run4');
		$('input','.cityForm').val('');
		cityEnd();
		run = 0;
		
		treeList = imgTree5;
		if(city == 1 && treeList.length > 0){
			treeLayer.addEventListener(LEvent.ENTER_FRAME, onTreeFrame);
		};
		
		return false;
	}
	
	if(city == 0){
		switch (run){
			case 1:
				length = imgLondon12.length;
				playList = imgLondon12;
				codeList = imgCode02;
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
			case 9:
				length = imgLondon45.length;
				playList = imgLondon45;
				run = 0;
				score += 2;
			break;
		}
	}else if(city == 1){
		switch (run){
			case 1:
				length = imgMilan12.length;
				playList = imgMilan12;
				codeList = imgCode12;
				run = 3;
			break;
			case 2:
				length = imgMilan15.length;
				playList = imgMilan15;
				treeList = imgTree15;
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
				treeList = imgTree25;
				run = 0;
				score += 4;
			break;
			case 5:
				length = imgMilan34.length;
				playList = imgMilan34;
				treeList = imgTree34;
				run = 7;
			break;
			case 6:
				length = imgMilan35.length;
				playList = imgMilan35;
				treeList = imgTree35;
				run = 0;
				score += 3;
			break;
			case 7:
				length = imgMilan45.length;
				playList = imgMilan45;
				treeList = imgTree45;
				run = 8;
				treeLayer.die();
			break;
			case 9:
				length = imgMilan45.length;
				playList = imgMilan45;
				treeList = imgTree45;
				run = 0;
				score += 2;
			break;
		}
	}else if(city == 2){
		switch (run){
			case 1:
				length = imgZurich12.length;
				playList = imgZurich12;
				codeList = imgCode22;
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
			case 9:
				length = imgZurich45.length;
				playList = imgZurich45;
				run = 0;
				score += 2;
			break;
		}
	}
	
	backLayer.addEventListener(LEvent.ENTER_FRAME, onFrame);
};
function onFrame(){
	
	backLayer.removeAllChild();
	
	//城市 London
	background = new LBitmap(new LBitmapData(playList[String(play)]));
	backLayer.addChild(background);
	
	play ++;
	if(play >= length){
		backLayer.die();
		
		if(city == 1 && treeList.length > 0){
			treeLayer.addEventListener(LEvent.ENTER_FRAME, onTreeFrame);
		};
		
		if(codeList.length > 0){
			codeLayer.addEventListener(LEvent.ENTER_FRAME, onCodeFrame);
		};
		
		$('input','.cityForm').val('');
		
		if(run == 0){
			cityEnd();
		}
	};
};

function onTreeFrame(){
	treeLayer.removeAllChild();
	
	treeBg = new LBitmap(new LBitmapData(treeList[String(tree)]));
	treeLayer.addChild(treeBg);
	tree++;
	
	if(tree >= treeList.length){
		treeLayer.die();
		
		if(run == 0 || run == 8){
			treeList = imgTree5;
			treeLayer.addEventListener(LEvent.ENTER_FRAME, onTreeRunFrame);
		}
		if(run == 7){
			treeList = imgTree4;
			treeLayer.addEventListener(LEvent.ENTER_FRAME, onTreeRunFrame);
		}
		
		tree = 0;
	}
};

function onTreeRunFrame(){
	treeLayer.removeAllChild();
	
	treeBg = new LBitmap(new LBitmapData(treeList[String(tree)]));
	treeLayer.addChild(treeBg);
	tree++;
	if(tree >= treeList.length){
		tree = 0;
	}
};

function onCodeFrame(){
	
	LGlobal.setFrameRate(300);
	
	codeLayer.removeAllChild();
	
	codeBg = new LBitmap(new LBitmapData(codeList[String(code)]));
	codeLayer.addChild(codeBg);
	code++;
	if(code >= codeList.length){
		code = 0;
	}
};

function cityEnd(){
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
	score = 0;
	run = 1;
	audio.close();
	$('button span', '.cityForm').removeAttr('class');
	if(city==0){
		$('.cityLondon').css('z-index', 0).children().fadeOut(300);
		
		//背景层清空
		backLayer.die();
		backLayer.removeAllChild();

		//城市 Milan
		background = new LBitmap(new LBitmapData(imgMilan12["0"]));
		backLayer.addChild(background);
		
		$('.cityForm').addClass('run').data('val', '米兰');
		
		audio.load(imgList['audioMilan']);
		audio.play(0, 100);
		
		codeList = imgCode11;
		codeLayer.addEventListener(LEvent.ENTER_FRAME, onCodeFrame);
		
		city = 1;
	}else if(city==1){
		$('.cityMilan').css('z-index', 0).children().fadeOut(300);
		
		//背景层清空
		backLayer.die();
		backLayer.removeAllChild();

		//城市 Milan
		background = new LBitmap(new LBitmapData(imgZurich12["0"]));
		backLayer.addChild(background);
		
		$('.cityForm').addClass('run').data('val', '苏黎世');
		
		audio.load(imgList['audioZurich']);
		audio.play(0, 100);
		
		codeList = imgCode21;
		codeLayer.addEventListener(LEvent.ENTER_FRAME, onCodeFrame);
		
		city = 2;
	}else if(city==2){
		$('.cityZurich').css('z-index', 0).children().fadeOut(300);
			
		backLayer.die();
		
		cloud = new LBitmap(new LBitmapData(imgList["bg_2"]));
		cloud.x = 0;
		cloud.alpha = 0;
		backLayer.addChild(cloud);
		backLayer.addChild(background);
		backLayer.addEventListener(LEvent.ENTER_FRAME, onZurichFrame);
		
		city = 3;
		
	}else{
		return false;
	}
	
	//树层清空
	treeLayer.die();
	treeLayer.removeAllChild();
};

function onZurichFrame(){
	background.alpha -= .1;
	cloud.alpha += .1;
	if(background.alpha <= 0){
		backLayer.die();
		backLayer.removeChild(background);
		
		$('.city_num').val(resultCity.length);
		
		shareContent = '我猜对了'+resultCity.length+'个城市，获得'+scoreAll+'分，即刻赢取 BALLY 秋冬新包！';
		$('.score').find('strong').html(scoreAll);
		$('.score').show().animate({opacity:1, marginTop:-367}, 500);
		
		audio.load(imgList['audioWind']);
		audio.play(0, 100);
		
		background = cloud.clone();
		background.x = -997;
		backLayer.addChild(background);
		
		codeLayer.addEventListener(LEvent.ENTER_FRAME, onCloudFrame);
	}
};

function onCloudFrame(){
	background.x += 1;
	cloud.x += 1;
	if(background.x >= 997){
		background.x = -997;
	};
	if(cloud.x >= 997){
		cloud.x = -997;
	};
}



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
		"spriteCityCont_1.png", "spriteCityCont_2.png", "spriteScore.png", "wx_code.png", "shareTip.png" ], 
		citys = [
		"city/london/12/0.jpg", "city/london/12/1.jpg", "city/london/12/2.jpg", "city/london/12/3.jpg", "city/london/12/4.jpg", "city/london/12/5.jpg",
		"city/london/12/6.jpg", "city/london/12/7.jpg", "city/london/12/8.jpg", "city/london/12/9.jpg", "city/london/12/10.jpg", "city/london/12/11.jpg",
		"city/london/15/0.jpg", "city/london/15/1.jpg", "city/london/15/2.jpg", "city/london/15/3.jpg", "city/london/15/4.jpg", "city/london/15/5.jpg",
		"city/london/15/6.jpg", "city/london/15/7.jpg", "city/london/15/8.jpg", "city/london/15/9.jpg", "city/london/15/10.jpg", "city/london/15/11.jpg",
		"city/london/23/0.jpg", "city/london/23/1.jpg", "city/london/23/2.jpg", "city/london/23/3.jpg", "city/london/23/4.jpg", "city/london/23/5.jpg",
		"city/london/23/6.jpg", "city/london/23/7.jpg", "city/london/23/8.jpg", "city/london/23/9.jpg", "city/london/23/10.jpg", "city/london/23/11.jpg",
		"city/london/25/0.jpg", "city/london/25/1.jpg", "city/london/25/2.jpg", "city/london/25/3.jpg", "city/london/25/4.jpg", "city/london/25/5.jpg",
		"city/london/25/6.jpg", "city/london/25/7.jpg", "city/london/25/8.jpg", "city/london/25/9.jpg", "city/london/25/10.jpg", "city/london/25/11.jpg",
		"city/london/34/0.jpg", "city/london/34/1.jpg", "city/london/34/2.jpg", "city/london/34/3.jpg", "city/london/34/4.jpg", "city/london/34/5.jpg",
		"city/london/34/6.jpg", "city/london/34/7.jpg", "city/london/34/8.jpg", "city/london/34/9.jpg", "city/london/34/10.jpg", "city/london/34/11.jpg",
		"city/london/35/0.jpg", "city/london/35/1.jpg", "city/london/35/2.jpg", "city/london/35/3.jpg", "city/london/35/4.jpg", "city/london/35/5.jpg",
		"city/london/35/6.jpg", "city/london/35/7.jpg", "city/london/35/8.jpg", "city/london/35/9.jpg", "city/london/35/10.jpg", "city/london/35/11.jpg",
		"city/london/45/0.jpg", "city/london/45/1.jpg", "city/london/45/2.jpg", "city/london/45/3.jpg", "city/london/45/4.jpg", "city/london/45/5.jpg",
		"city/london/45/6.jpg", "city/london/45/7.jpg", "city/london/45/8.jpg", "city/london/45/9.jpg", "city/london/45/10.jpg" ];

	$.preloadimg(imgs, function(){
		$("img").each(function(index, element) {
			$(this).attr("src", $(this).data("src"));
		});
		$.preloadimg(citys, function(){
			$("#loading").delay(500).fadeOut(300,function(){
				clearInterval(bgRun,dotRun);
				$(this).remove();
				step_1();
			});
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
				case 7:
					run = 9;
					break;
				case 8:
					score += 1;
					break;
			};
			switch (city){
				case 0:
					resultCity.push('1');
				break;
				case 1:
					resultCity.push('2');
				break;
				case 2:
					resultCity.push('3');
				break;
			}
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
		$('.cityForm').remove();
		
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