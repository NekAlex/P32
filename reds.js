const reds = [3,5,6,8,9,12,17,25,27,28,29,36,40,42,43,46,47,48,
53,54,60,63,64,66,67,69,70,71,72,82,86,92,93,95,96,98,100,
101,104,105,110,111,117,120,121,123,124,130,131,132,133,134,135,136,137,140,142,142,143,144,145,146,147,149,
153,155,168,169,171,172,175,182,187,190,192,195,196,200,
207,217,221,229,236,237,244,249,250,
251,252,265,272,273,285,286,297,298];

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
	}
	function makeData(floor){
		const LSK_Attr={fill:"#000",stroke:"#000"};
		const fl = (floor-2)*50;
		const data=[
		<!-- 4 ряд -->
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
		<!-- 4 ряд -->
		<!-- 3 ряд -->
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
		<!-- 3 ряд -->
		<!-- 2 ряд -->
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
		<!-- 2 ряд -->
		<!-- 1 ряд -->
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
		
		<!-- 1 ряд -->
		<!-- 0 ряд -->
		{id:fl+50, t:1, x:179,y:440, height:94, width:57, attr:LSK_Attr},
		<!-- 0 ряд -->
		]
	return data;
};
	function fillReds(data,reds){
		var filteredArray = data.filter(n => reds.some(n2 => n.id == n2));
		filteredArray.forEach(elem=>{ elem.attr = {fill:"#F00",stroke:"#000"}});
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
		fillReds(data,reds);
		
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
//makeRed2();
	}
})(P32)
