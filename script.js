const secondhand = document.querySelector(".secondhand");
const minutehand = document.querySelector(".minutehand");
const hourhand = document.querySelector(".hourhand");

function setDate(){
	const date = new Date();
	const seconds = date.getSeconds();
	const secdegree = ((seconds*6)+90);
	secondhand.style.transform = "rotate(" + secdegree  +"deg)";


	const mins = date.getMinutes();
	const mindegree = ((mins*6)+90);
	minutehand.style.transform = "rotate(" + mindegree  +"deg)";

	const hours = date.getHours();
	const hourdegree = ((hours*30)+90);
	hourhand.style.transform = "rotate(" + hourdegree  +"deg)";

	  const audio = new Audio('tick.mp3');
	  audio.play();


}
setInterval(setDate, 1000);
