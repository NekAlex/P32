const updated = '25.03.2022';
const reds = [3,5,6,25,27,28,29,36,40,43,46,48,
53,54,60,66,67,69,70,71,72,82,86,92,96,98,100,
104,105,111,117,120,121,124,130,131,133,136,137,140,142,144,145,146,147,
153,155,168,169,171,172,182,190,196,200,
207,217,221,229,236,237,244,249,250,
252,272,273,297];

const greens = [1,2,8,9,10,13,14,23,24,26,30,34,35,38,39,47,49,
		51,52,63,64,67,68,72,75,76,79,80,81,83,84,85,87,88,91,92,93,98,99, 
		106,107,108,109,110,114,115,116,117,119,122,126,129,137,141,143,150,
		151,152,156,159,164,165,166,167,174,178,183,188,189,191,193,195,
		201,205,208,211,213,215,216,218,220,222,228,235,239,240,241,242,243,248,
		251,253,254,256,257,258,259,260,261,262,264,265,266,267,269,270,271,274,276,277,279,280,281,282,283,286,287,290,291,293,294,295,296,299,300
	       ];
function getSpace(num){
	if([50,100,150,200,250,300].indexOf(num)>=0) return 21.6;
	if([3,53,103,153,203,253].indexOf(num)>=0) return 19.1;
	if([15, 38, 65, 88, 115, 138, 165, 188, 215, 238, 265, 288].indexOf(num)>=0) return 20.3;
	if([41,42,43,44,45,91,92,93,94,95,141,142,143,144,145,191,192,193,194,195,241,242,243,244,245,291,292,293,294,295].indexOf(num)>=0) return 22.3;
	if([39,40,46,47,48,49, 89,90,96,97,98,99, 139,140,146,147,148,149,189,190,196,197,198,199,239,240,246,247,248,249,289,290,296,297,298,299].indexOf(num)>=0) return 15.5;
	return 13.3;
}
function getStat(){
	return greens.reduce(function(a,b){ let et = Math.floor((b-1)/50)+2; a[et]=a[et]+1; return a;},{2:0,3:0,4:0,5:0,6:0,7:0});
}
function makeRed(){
	reds.forEach((arrayElement, index) => {
		const cod ="mm"+arrayElement.toString().padStart(3,0);
		let elem = document.getElementById(cod);
		if(elem) elem.classList.add("red");
 });
}
document.addEventListener("DOMContentLoaded", function() {makeRed();});

var P32={};
(function(obj){
	
	var paper = Raphael("raph", 1024, 710); 
	var txts={};
	//Private
	function makeHeader(floor){
		const ts = paper.text(610, 20, "ПЛАН "+floor.toString()+" ЭТАЖА");
		ts.attr("font-size","28px");
		ts.attr("font-family","Verdana");
		ts.attr("font-style","italic");
		 //paper.print(610, 20, "ПЛАН "+floor.toString()+" ЭТАЖА", paper.getFont("Times",800), 28);
		const ts1 = paper.text(610, 40, "обновлено "+updated.toString()+"");
		ts1.attr("font-size","12px");
		ts1.attr("font-family","Verdana");
		ts1.attr("font-style","italic");
	}
	function makeFooter(){

		const tot = paper.text(610, 700, " "+Math.round(greens.reduce(function(a,b){ return a+getSpace(b);},0)*100)/100+ "("+greens.length+")");
		tot.attr("font-size","12px");
		tot.attr("font-family","Verdana");
		tot.attr("font-style","italic");
	}
	function makeData(floor){
		const LSK_Attr={fill:"#000",stroke:"#000"};
		const fl = (floor-2)*50;
		const data=[
		//<!-- 4 ряд -->
		{id:fl+49, x:356,y:100, height:97, width:39, attr:LSK_Attr},
		{id:fl+48, x:395,y:100, height:97, width:39, attr:LSK_Attr},
		{id:fl+47, x:434,y:100, height:97, width:39, attr:LSK_Attr},
		
		{id:fl+46, x:483,y:100, height:97, width:39, attr:LSK_Attr},
		{id:fl+45, x:522,y:100, height:97, width:57, attr:LSK_Attr},
		
		{id:fl+44, x:588,y:100, height:97, width:57, attr:LSK_Attr},
		{id:fl+43, x:649,y:100, height:97, width:57, attr:LSK_Attr},
		
		{id:fl+42, x:715,y:100, height:97, width:57, attr:LSK_Attr},
		{id:fl+41, x:776,y:100, height:97, width:57, attr:LSK_Attr},
		
		{id:fl+40, x:842,y:100, height:97, width:39, attr:LSK_Attr},
		{id:fl+39, x:881,y:100, height:97, width:39, attr:LSK_Attr},
		//<!-- 4 ряд -->
		//<!-- 3 ряд -->
		{id:fl+27, x:356,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+28, x:395,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+29, x:434,y:292, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+30, x:588,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+31, x:627,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+32, x:666,y:292, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+33, x:715,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+34, x:754,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+35, x:793,y:292, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+36, x:842,y:292, height:83, width:39, attr:LSK_Attr},
		{id:fl+37, x:881,y:292, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+38, x:930,y:292, height:88.5, width:56, attr:LSK_Attr},
		//<!-- 3 ряд -->
		//<!-- 2 ряд -->
		{id:fl+26, x:356,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+25, x:395,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+24, x:434,y:388, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+23, x:588,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+22, x:627,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+21, x:666,y:388, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+20, x:715,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+19, x:754,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+18, x:793,y:388, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+17, x:842,y:388, height:83, width:39, attr:LSK_Attr},
		{id:fl+16, x:881,y:388, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+15, x:930,y:383, height:88.5, width:56, attr:LSK_Attr},
		//<!-- 2 ряд -->
		//<!-- 1 ряд -->
		{id:fl+1, x:346,y:567.5, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+2, x:435,y:567, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+3, x:483,y:567, height:83, width:56, attr:LSK_Attr},
		{id:fl+4, x:539,y:567, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+5, x:588,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+6, x:627,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+7, x:666,y:567, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+8, x:715,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+9, x:754,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+10, x:793,y:567, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+11, x:842,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+12, x:881,y:567, height:83, width:39, attr:LSK_Attr},
		
		{id:fl+13, x:930,y:567, height:83, width:39, attr:LSK_Attr},
		{id:fl+14, x:969,y:567, height:83, width:39, attr:LSK_Attr},
		
		//<!-- 1 ряд -->
		//<!-- 0 ряд -->
		{id:fl+50, t:1, x:179,y:440, height:94, width:57, attr:LSK_Attr},
		//<!-- 0 ряд -->
		]
	return data;
};
	/*function fillReds(data,reds){
		var filteredArray = data.filter(n => reds.some(n2 => n.id == n2));
		filteredArray.forEach(elem=>{ elem.attr = {fill:"#F00",stroke:"#000"}});
	}*/
	function fillRect(data,reds, fillColor){
		var filteredArray = data.filter(n => reds.some(n2 => n.id == n2));
		filteredArray.forEach(elem=>{ elem.attr = {fill:fillColor,stroke:"#000"}});
	}
	//Public
	obj.makeMap = function(floor){
		paper.clear();
		
		paper.image("img/floor.png", 0, 0, 1024, 710);
		//img.attr({ "clip-rect": "20,20,30,30" });
		//function hoverIn() {
		//        this.attr({"opacity": 0.5});
		//    };
			
		//function hoverOut() {
		//        this.attr({"opacity": 0.2});    
		//    }
		makeHeader(floor);
		
		data = makeData(floor);
		fillRect(data,reds, "#F00");
		fillRect(data,greens,"#0F0");
		data.forEach(elem=>{
			let cod = "mm"+elem.id.toString().padStart(3,0);
			paper.setStart();
			const t = paper.text(elem.x + elem.width/2, elem.y + elem.height/4, elem.id.toString()+"");
			const r= paper.rect(elem.x, elem.y, elem.width, elem.height);
			
			t.attr("font-size","10px");
			t.attr("font-family","Verdana");
			t.attr("font-weight","bold");
			txts[cod+"t"]=t;
			var set = paper.setFinish();
			
			if(elem.t==1){
				//поворот 45 в право
				set.rotate(-45);
				//фикс съехал текст
				t.attr("x",190)
			}
		
			r.node.setAttribute("id",cod);
			r.node.classList.add("mm");
			if(elem.attr) r.attr(elem.attr);
			//MCDU[cod].hover(hoverIn, hoverOut, MCDU[cod], MCDU[cod]);
		});
		makeFooter(floor);
//makeRed2();
	}
})(P32)
