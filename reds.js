const reds = [3,5,6,8,9,12,17,25,27,28,29,36,40,42,43,44,46,47,48,53,54,55,60,63,64,65,66,67,69,70,71,72,74,80,82,84,86,88,92,93,95,96,97,98,100,101,102,104,105,110,111,117,120,121,122,123,124,127,128,130,131,132,133,134,135,136,137,140,142,142,143,144,145,146,147,149,153,155,161,162,168,169,171,172,175,177,181,182,186,187,190,191,192,195,196,199,200,207,208,209,210,214,217,221,222,227,229,236,237,244,249,250,251,252,261,265,272,273,275,281,285,286,287,297,298];

function makeRed(){
	reds.forEach((arrayElement, index) => {
	let elem = document.getElementById("mm"+arrayElement.toString().padStart(3,0));
	if(elem) elem.classList.add("red");
 });
}

document.addEventListener("DOMContentLoaded", function() {makeRed();});