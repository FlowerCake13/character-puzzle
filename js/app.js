window.onload = function(){
	var start = document.getElementById('start');
	var modal = document.getElementById('modal');
	var instructions = document.getElementById('instructions');
	var instWords = document.getElementById('instWords');

	modal.style.display = 'block';
	instWords.style.display = 'none';

	instructions.onclick = function(){
		instWords.style.display = 'block';
	}
}

start.onclick = function(){
	modal.style.display = 'none';
	setTimeout(doStuff, 60000);

	var container = document.getElementById('puzzleContainer');
	var input = document.getElementById('input');
	var point = document.getElementById('point');
	var arr = [];
	var score = 1;

	input.focus()

	var puzzle1 = {
		imgsrc: 'assets/bulbasaur.png',
		answer: 'bulbasaur'
	}
	var puzzle2 = {
		imgsrc: 'assets/charmander.png',
		answer: 'charmander'
	}
	var puzzle3 = {
		imgsrc: 'assets/chespin.png',
		answer: 'chespin'
	}
	var puzzle4 = {
		imgsrc: 'assets/chikorita.png',
		answer: 'chikorita'
	}
	var puzzle5 = {
		imgsrc: 'assets/chimchar.png',
		answer: 'chimchar'
	}
	var puzzle6 = {
		imgsrc: 'assets/cyndaquil.png',
		answer: 'cyndaquil'
	}
	var puzzle7 = {
		imgsrc: 'assets/fennekin.png',
		answer: 'fennekin'
	}
	var puzzle8 = {
		imgsrc: 'assets/froakie.png',
		answer: 'froakie'
	}
	var puzzle9 = {
		imgsrc: 'assets/litten.png',
		answer: 'litten'
	}
	var puzzle10 = {
		imgsrc: 'assets/mudkip.png',
		answer: 'mudkip'
	}
	var puzzle11 = {
		imgsrc: 'assets/oshawott.png',
		answer: 'oshawott'
	}
	var puzzle12 = {
		imgsrc: 'assets/pikachu.png',
		answer: 'pikachu'
	}
	var puzzle13 = {
		imgsrc: 'assets/piplup.png',
		answer: 'piplup'
	}
	var puzzle14 = {
		imgsrc: 'assets/popplio.png',
		answer: 'popplio'
	}
	var puzzle15 = {
		imgsrc: 'assets/rowlet.png',
		answer: 'rowlet'
	}
	var puzzle16 = {
		imgsrc: 'assets/snivy.png',
		answer: 'snivy'
	}
	var puzzle17 = {
		imgsrc: 'assets/squirtle.png',
		answer: 'squirtle'
	}
	var puzzle18 = {
		imgsrc: 'assets/tepig.png',
		answer: 'tepig'
	}
	var puzzle19 = {
		imgsrc: 'assets/torchic.png',
		answer: 'torchic'
	}
	var puzzle20 = {
		imgsrc: 'assets/totodile.png',
		answer: 'totodile'
	}
	var puzzle21 = {
		imgsrc: 'assets/treecko.png',
		answer: 'treecko'
	}
	var puzzle22 = {
		imgsrc: 'assets/turtwig.png',
		answer: 'turtwig'
	}
	var puzzleArr = [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5, puzzle6, puzzle7, puzzle8, puzzle9, puzzle10, puzzle11, puzzle12, puzzle13, puzzle14, puzzle15, puzzle16, puzzle17, puzzle18, puzzle19, puzzle20, puzzle21, puzzle22];
	var chosen;
	generateBackground()
	container.style.backgroundImage = "url(" + chosen.imgsrc + ")";

	function generateRandNum(){
		var randNum = Math.floor(Math.random() * 200);
		return randNum;
	}
	function generateRandLeft(){
		var randNum = Math.floor(Math.random() * document.body.scrollWidth)
		return randNum;
	}
	function generateRandTop(){
		var randNum = Math.floor(Math.random() * document.body.scrollHeight);
		return randNum;
	}
	function generateBackground(){
		var randPuzzle = Math.floor(Math.random() * puzzleArr.length);
		chosen = puzzleArr[randPuzzle];
		console.log(puzzleArr[randPuzzle]);
	}

	function generatePieces(){
		var numPieces = Math.floor(Math.random() * 200 + 100);
		//var numPieces = 5;
		score = score + numPieces;
		for(var i = 0; i < numPieces; i++){
			var div = document.createElement('DIV');
			div.className += 'piece';
			div.style.height = generateRandNum() + 'px';
			div.style.width = generateRandNum() + 'px';
			div.style.top = generateRandTop() + 'px';
			div.style.left = generateRandLeft() + 'px';
			container.appendChild(div)
			arr.push(div);
		}
	}
	function takeAwayPiece(){
		//console.log('asdofihadsihfdahio')
		var randNumArr = Math.floor(Math.random() * arr.length);
		arr[randNumArr].style.display = 'none';
		score--;
		point.innerHTML = "Points: " + score
	}
	var interval = setInterval(takeAwayPiece, 200);
	document.addEventListener('keypress', function(event){
		//console.log(input.value)
		if (event.keyCode == 13) {
			if (input.value == chosen.answer) {
				clearInterval(interval);
				//alert('YOU WIN!')
				point.innerHTML = "Points: " + score
				startOver()
			}
		}
	})
	generatePieces();
	function startOver(){
		generateBackground();
		input.value = '';
		container.style.backgroundImage = "url(" + chosen.imgsrc + ")";
		arr = [];
		console.log(arr)	
		container.innerHTML = "";
		generatePieces();
		resetInterval();
	}
	function resetInterval(){
		interval = setInterval(takeAwayPiece, 200);
	}

	function doStuff(){
		alert('Your score was ' + score + '. Click OK to play again...')
		score = 1;
		startOver();
		setTimeout(doStuff, 60000);
		input.focus()
	}	
}