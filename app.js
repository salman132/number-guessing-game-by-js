//Game values 
let min=1,max=10,winnningNum = getWinningNum(min,max), guessesLeft =4;


//UI elements
const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max; 

//Play Again event
game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
})

//Listen guess
guessBtn.addEventListener('click',function(){
	let guess = parseInt(guessInput.value);

	//Validate input
	if(guess ===NaN || guess <min || guess >max){
		setMessage(`Please enter number between ${min} and ${max}`);
		message.className = "text-danger";
		setTimeout(clearMsg,3000);
	}


	//Check if winning
	if(guess === winnningNum){
		//disable input
		guessInput.disabled = true;	

		//change the border colro
		guessInput.style.borderColor = 'green';
		setMessage(`${winnningNum} is Correct.You Just won`);
		message.className = "text-success";
		guessBtn.value = 'Play Again';
		guessBtn.className +=	 'play-again';

	}

	else{
		//Wrong numer
		guessesLeft -=1;
		setMessage(`Wrong guess,Chance left = ${guessesLeft}`);
		message.className = "text-danger";
		guessInput.value = '';

	}

	if(guessesLeft ===0){
		//Game over

		//disable input
		guessInput.disabled = true;
		guessBtn.className +=	 'play-again';

		//change the border colro
		guessInput.style.borderColor = 'red';
		setMessage(`Game over,You lost,The number was ${winnningNum}`);
		message.className = "text-danger";
		guessBtn.value = 'Play Again';
	}
	else{
		//Game is contiuning,wrong input
	}

	

});




//Set msg
function setMessage(msg){

	message.textContent = msg;
}
function clearMsg(){
	message.textContent = '';
}

//get winnign num
function getWinningNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}



