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

				// 	if (countUp == numberGen) {

				// 		alert("Winner, winner! Chicken Dinner.");
				// 		wins++;

				// 	} 

				// 	else (countUp > numberGen) {

				// 		alert('Whisper: The cake is a LIE. Try again!');
				// 		losses++;

					// });

				// });
					console.log(matchedNum);

					console.log(ranNum);
			});

});