//Variables
//=======================
var randomGoal;
var win = 0;
var loss = 0;
var prev = 0;
//========================


function reset() {
    $('.crystals').empty();

    var images = ['assets/images/amethyst-crystals.jpg',
     'assets/images/caledonite-crystals.jpg', 
     'assets/images/ruby-crystals.jpg', 
     'assets/images/sapphire-crystals.jpg'];

    var randomGoal = Math.floor(Math.random() * 101) + 19;

    $("#goal").html(randomGoal);
    for(var i = 0; i < 4; i++) {
    
    var randomValue = Math.floor(Math.random() * 11) + 1;
    console.log(randomValue);
    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random-value": randomValue
    })
    crystal.css({
        "background-image":"url('" + (images[i]) + "')",
        "background-size": "cover"

    });

    $('.crystals').append(crystal);
    }
    $('#previous').html(prev);
}

reset();

//Event Delegation
$(document).on('click','.crystal', function () {
    //$(".crystal").on("click", function() {
        if(prev === randomGoal) {
            console.log("Right on the money!");
            win++;
            $('#wins').html(win);
            reset();
            prev = 0;
            }    
    
        else if(prev > randomGoal) {
            console.log("BUST!");
            loss++;
            $('#losses').html(loss);
            reset();
            prev = 0;
            }

        
    
    var crystalNum = parseInt($(this).attr('data-random-value'));
        prev += crystalNum;
        $('#previous').html(prev)
        console.log(prev);

        
               
		 
});







//Pseudo coding
//A game with 4 crystals
//Player shown a random number at start of game
//Clicking on a crystal adds a specific amount of points to the player's total score
//Each crystal has a different point value
//Game will hide this point value until the player clicks the crystal
//Assigning randomly generated values 1-12 to each crystal 
//Random value of the crystals should change every time we win or lose
//The point of game is to click on crystals until player's total score matches that random number goal

//IF it is not equal, we increment a lose counter and start over
//if it is equal, we increment a win counter and start over









