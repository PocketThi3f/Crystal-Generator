var wins = 0;
var losses = 0;
var countUp = 0;
var guessValue = "";
					
$(document).ready(function() {

	function creation() {

		var rNG = Math.floor(Math.random() * 13) + 1;
			$('#imagery1').append(rNG);
			$('#imagery2').append(rNG);
			$('#imagery3').append(rNG);
			$('#imagery4').append(rNG);		
		}

		$("#numberGen").text(matchedNum);

			for (var i = 0; i <= rNG.length; i++) {
						
				var gemClass = $('<img>').addClass('powerGem');
					gemClass.attr('data-val', rNG.length);
						gemClass.attr('alt', 'fabGems');
							$('.powerGem').append(gemClass);

			}

				$('.powerGem').on('click', function() {

					countUp = countUp + parseInt($(this).data('val'));

				$('#goalNumber').text(countUp);

					if (countUp == guessValue) {

						alert("Winner, winner! Chicken Dinner.");
						wins++;
						creation();

					} 

					else (countUp > guessValue) {

						alert('Whisper: The cake is a LIE. Try again!');
						losses++;
						creation();

					}

				});

});