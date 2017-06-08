var previous = -1;

function setRandomBackgroundColor()
{
	var index = Math.floor(Math.random() * 7);


	if (index == previous)
		index = (index + 1) % 7;
	previous = index;
	
	var colors = ["#1abc9c","#2ecc71","#3498db","#9b59b6","#f1c40f","#e67e22","#e74c3c"]

	document.body.style.background = colors[index];
	var rota = Math.floor(Math.random() * 30) - 15;
	document.getElementById('rotatingText').style.transform="rotate(" + rota + "deg)"
	setTimeout(setRandomBackgroundColor, 375);
}
