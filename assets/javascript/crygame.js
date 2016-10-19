$(document).ready(function() { 

   // 		    $('#numberGen').load(function() {
                    
   //  			var matchedNum = [];

   //      			for (var i=19, t=120; i<t; i++) {

   //          		matchedNum.push(Math.floor(Math.random() * 10) + 1)

			// 			console.log(matchedNum);		

   //      		}

					
			// });

            $('.powerGem').on('click', function() {
                    
    			var ranNum = [];

        			for (var i=0, t=1; i<t; i++) {

            		ranNum.push(Math.round(Math.random() * 11) + 1);

            		$('#goalNumber').html('<span> ' + ranNum + '</span>');

        		}

					console.log(ranNum);
			});


			
                    

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

});