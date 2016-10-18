var myPotterPals = [

    $('<div id="hairyPotter" class="character"></div>').data({
        health: 150,
        name: 'Harry Potter',
        attack: 10
    }),
    $('<div id="profSnape" class="character"></div>').data({
        health: 160,
        name: 'Professor Snape',
        attack: 10
    }),
    $('<div id="lordVold" class="character"></div>').data({
        health: 200,
        name: 'Voldemort',
        attack: 10
    })
    $('<div id="albyDumble" class="character"></div>').data({
        health: 200,
        name: 'Albus',
        attack: 10
    })

];
$.each(myPotterPals, function(character) {
    // append each one to you game board?
});






$('.characterContainer').on('click', function () {
       if ($(this).hasClass('lukeContainer')) {
            $('#chosenone').append(lukeBox);
            $('#enemies').append(maulBox,jodaBox,kiloBox);
            $('#char').empty();


            // store the value
$('.enemy').data('health', 140);

// update the value
var someNewValue = 130;
$('.enemy').data('health', someNewValue);

// retrieve the value
var enemyHealth = $('.enemy').data('health');


for (var i = 0; i < letters.length; i++) {
                var b = $('<button>');
                b.addClass('letter-button letter letter-button-color');
                b.data('woohoo', letters[i]);


                var characterStats = [
    new Character('Gimli', 150, 10, 15),
    new Character('Arwen', 100, 10, 15)
    //etc
];

