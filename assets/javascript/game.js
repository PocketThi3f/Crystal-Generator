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


var myGameCharacters = [
    $('#gimli.character').data({
        health: 150,
        name: 'Gimli',
        attack: 100
    }),
    $('#arwen.character').data({
        health: 100,
        name: 'Arwen',
        attack: 455
    }),
    $('#frodo.character').data({
        health: 50,
        name: 'Frodo',
        attack: 5
    })
];


var myGameCharacters = [
    $('<div id="gimli" class="character"></div>').data({
        health: 150,
        name: 'Gimli',
        attack: 100
    }),
    $('<div id="arwen" class="character"></div>').data({
        health: 100,
        name: 'Arwen',
        attack: 455
    }),
    $('<div id="frodo" class="character"></div>').data({
        health: 50,
        name: 'Frodo',
        attack: 5
    })
];
$.each(myGameCharacters, function(character) {
    // append each one to you game board?
});