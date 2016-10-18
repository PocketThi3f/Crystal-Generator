var wins = 0;
var losses = 0;

rNg();		
					
						$(document).ready( function() {

							function rNG() {

								var rNG = Math.floor(Math.random() * 12) + 1;
							}

							var countUp = 0;


							$("#numberGen").text(guessValue);

							for (var i = 0; i <= rNG.length; i++) {
						
								var crystalLine = $('<img>');
								crystalLine.attr('data-val');
								crystalLine.attr('alt', 'fabGems');
								$('#gemArea').append(crystalLine);

							}

							$('.powerGem').on('click', function() {

								countUp = countUp + parseInt($(this).data('val'));

								$('#goalNumber').text(countUp);

								if (countUp == guessValue) {

									alert("Winner, winner! Chicken Dinner.");
									wins++;
									rNG();

								} 

								else (countUp > guessValue) {

									alert('Whisper: The cake is a LIE. Try again!');
									losses++;
									rNG();

								}

							});

						});