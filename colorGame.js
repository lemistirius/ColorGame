var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var bodyColor = document.querySelector("body");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var borderSq = document.querySelector("#container");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
	

		bodyColor.style.backgroundColor = "#232323";
		this.classList.add("selected");	
		
		//this.textContent === "Easy" ?	numSquares = 3  "medium" ?  numSquares = 6 ; 
		if(this.textContent === "Easy")
		
		{
			numSquares = 3;
			borderSq.classList.add("border1");
			borderSq.classList.remove("border3");
			borderSq.classList.remove("border2");
			//line2.classList.add("linesecond");
			//squares.classList.remove("border");

		}
		else if(this.textContent === "Medium")
		{
			numSquares = 6;
			borderSq.classList.add("border2");
			borderSq.classList.remove("border1");
			borderSq.classList.remove("border3");


		}
		else if(this.textContent === "Hard")
		{
			numSquares = 9;
			borderSq.classList.add("border3");
			borderSq.classList.remove("border1");
			borderSq.classList.remove("border2");
		}

		
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];


		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	bodyColor.style.backgroundColor = "#232323";
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;
borderSq.classList.add("border3");

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() 
	{
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) 
		{
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			bodyColor.style.backgroundColor = clickedColor;
			//borderSq.classList.add("border3")
			
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
 }


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


 

