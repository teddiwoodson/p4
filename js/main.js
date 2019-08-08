$('#puzzle').tilePuzzle({
    'level': 3,
    'maxWidth': 300,
    'imageUrl': 'images/puzzle.jpg'
});


//Image Change on Refresh
var rand_int = Math.floor(Math.random() *4);

var r_image = [
	"images/recipe2.jpg",
	"images/recipe3.jpg",
	"images/recipe4.jpg",
	"images/recipe1.jpg",
];

im = document.getElementById("image");
im.src = r_image[rand_int];

//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');


//hamburger menu
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});

//joke generator
$(document).ready(function(){
  var quoteSource=[
  {
    quote: "What do you call a sleeping dinosaur?",
    name:"A Dino-snore!"
    },
    {
      quote:"What dinosaur would Harry Potter be?",
      name:"The Dinosorcerer"
    },
    {
      quote:"Why was the Stegosaurus such a good volleyball player?",
      name:"Because he could really spike the ball! "
    },
    {
      quote:"What does a triceratops sit on?",
      name:"Its tricera-bottom."
    },
    {
      quote:"What do dinosaurs use on the floors of their kitchens?",
      name:"Rep-tiles"
    },
    {
      quote:"What's the nickname for someone who put their right hand in the mouth of a T-Rex?",
      name:"Lefty"
    },
    {
      quote:"What game does the brontosaurus like to play with humans?",
      name:"Squash"
    },
    {
      quote:"Why did the dinosaur cross the road?",
      name:"To eat the chickens on the other side."
    },
    {
      quote:"What do you call a paleontologist who sleeps all the time?",
      name:"Lazy bones"
    },
    {
      quote:"What do you get when a dinosaur scores a touchdown?",
      name:"A dino-score"
    },
    {
      quote:"What did the dinosaur use to build his house?",
      name:"A dino-saw"
    },
    {
      quote:"What’s the best way to talk to a velociraptor?",
      name:"Long distance!"
    },
    {
      quote:"How do you ask a tyrannosaur out to lunch?",
      name:"Tea, Rex?"
    },
    {
      quote:"Why can't you hear a pterosaur using the bathroom?",
      name:"Because the P is silent!"
    },
    {
      quote:"What do you call a terrible, horrible, unpleasant dinosaur?",
      name:"A thesaurus."
    },
    {
      quote:"What is a dinosaur's least favorite reindeer?",
      name:"Comet!"
    },
    {
      quote:"What did dinosaurs use to make their hot dogs?",
      name:"Jurassic pork!"
    },
    {
      quote:"What dinosaur could jump higher than a house?",
      name:"All of them. Houses can't jump!"
    },
    {
      quote:"What do you call it when a dinosaur gets in a car accident?",
      name:"Tyrannasaurus wreck!"
    },
    {
      quote:"What do you call a blind dinosaur?",
      name:"adoyouthinkhesaurus."
    },
    {
      quote:"Who makes dinosaur clothes?",
      name:"dino-sewer."
    },
    {
      quote:"What do you call a dinosaur that's a noisy sleeper?",
      name:"A Bronto-snorus."
    },
    {
      quote:"What do you call a dinosaurs fart?",
      name:"A blast from the past"
    },
    {
      quote:"What kind of dinosaur works for the police?",
      name:"A trisara-cop."
    }

];


  $('#quoteButton').click(function(evt){
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteGenius);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //fade out animation with callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
      quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
      //fadein animation.
      quoteContainer.fadeIn(timeAnimation);
    });

    break;
  };//end for loop

});//end quoteButton function

});//end document ready
