//Variables for Scoring
var wins = 0;
var losses = 0;
var score = 0;
var winningNumber = Math.floor((Math.random() * 120) + 19);
console.log(winningNumber);

//Variables and  random values for individual gems
var melonCrystal = Math.floor((Math.random() * 12) + 1);
var galaxyOpal = Math.floor((Math.random() * 12) + 1);
var porkGem = Math.floor((Math.random() * 12) + 1);
var cabbageGem = Math.floor((Math.random() * 12) + 1);


//Gem values updated to update function
$(document).ready(function(){

	$('#watermelon').click(function(){
			score = score + melonCrystal;
			results();
		})

	$('#opal').click(function(){
			score = score + galaxyOpal;
			results();	
		})

	$('#porkBelly').click(function(){
			score = score + porkGem;
			results();
		})

	$('#cabbage').click(function(){
			score = score + cabbageGem;
			results();
		})
		
		$("#randomNumber").append(winningNumber);
		$("#score").append(score);

});


//Appending to the html score/values
function updateStats(){

	$('#score').empty();
	$('#score').append(score);
	$('#score').replaceAll(score);

	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	

}

//Begin the game one more time
function restart(){

	score = 0;
	winningNumber = Math.floor((Math.random() * 120) + 19);

	$("#randomNumber").empty();
	$("#randomNumber").append(winningNumber);

		melonCrystal = Math.floor((Math.random() * 12) + 1);
		galaxyOpal = Math.floor((Math.random() * 12) + 1);
		porkGem = Math.floor((Math.random() * 12) + 1);
		cabbageGem = Math.floor((Math.random() * 12) + 1);

	updateStats();

}

function results (){

	if (score == winningNumber) {

			wins = wins + 1;
			alert('Congratulations. You Won! Please play again!');

			restart();

			}			

		else if (score > winningNumber) {

			losses = losses + 1;
			alert('You lost. Please play again!');
			restart();

			}

		else {

			updateStats();

			}

}