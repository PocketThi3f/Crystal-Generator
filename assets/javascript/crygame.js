$(document).ready(function() { 


			$('.powerGem').on('click', function() {
                    
    			var ranNum = [];

        			for (var i = 0, t = 1; i < t; i++) {

            		ranNum.push(Math.round(Math.random() * 11) + 1);

           			$('#goalNumber').html('<span> ' + ranNum + '</span>');

        		}


        	$('#numberGen').text(matchedNum); 
                    
    			var matchedNum = [];

        			for (var i = 19, t = 120; i < t; i++) {

            		matchedNum.push(Math.round(Math.random() * 120));

            		$('#numberGen').html('<span> ' + matchedNum + '</span>');		

        			}

        		// $('#goalNumber').text(countUp);

				// 	if (countUp == guessValue) {

				// 		alert("Winner, winner! Chicken Dinner.");
				// 		wins++;
				// 		creation();

				// 	} 

				// 	else (countUp > guessValue) {

				// 		alert('Whisper: The cake is a LIE. Try again!');
				// 		losses++;
				// 		creation();

					// });

				// });
					console.log(matchedNum);

					console.log(ranNum);
			});

});