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

//ink

(function(){
	function wrapWords(el) {
		'use strict';
		$(el).filter(':not(script)').contents().each(function () {
			if (this.nodeType === Node.ELEMENT_NODE) {
				wrapWords(this);
			} else if (this.nodeType === Node.TEXT_NODE && !this.nodeValue.match(/^\s+$/m)) {
				$(this).replaceWith($.map(this.nodeValue.split(/(\S+)/), function (w) {
					return w.match(/^\s*$/) ? document.createTextNode(w) : $('<span>', {class: 'word', text: w}).get();
				}));
			}
		});
	};


	 $('#quoteContainer p').each(function(){
		$(this).html(wrapWords(this));

		$(this).find('.word').each(function(){
			inkout($(this));
			$(this).addClass('initialized');
		});
	});

	$('body').on('DOMNodeInserted', function(e) {
		if ($(e.target).is('#quoteContainer p') && $(e.target).hasClass('initialized') == false) {
			setTimeout(function(){
				$(e.target).html(wrapWords(e.target));

				$(e.target).find('.word').each(function(){
					if(!$(this).hasClass('initialized')){
						inkout($(this));
						$(this).addClass('initialized');
					}
				});
				$(e.target).addClass('initialized');
			}, 100);
		}
	});


	function css( element, property ) {
		return window.getComputedStyle( element, null ).getPropertyValue( property );
	}

	function inkout(element){
		element.parent().css('position','relative');
		var startTime = new Date().getTime();
		var currentTime = startTime / 1000;
		var font = element.css('font-size') +' '+ element.css('font-family');
		var color = element.css('color');
		var text = element.html();

		var particles = [];
		var hoverArray = [];

		var cw = element.width(),
		    ch = element.height();
		element.html('');
		var canvas = $('<canvas/>').attr({width: cw, height: ch}).css({display: 'inline-block','vertical-align': 'text-bottom'}).appendTo(element),
		    context = canvas.get(0).getContext("2d");

		function drawText(){
			context.clearRect(0,0,cw,ch);
			context.fillStyle = color;
			context.clearRect(0,0,cw,ch);
			context.font = font;
			context.textAlign = "center";
			context.fillText(text,cw/2, ch - (ch/5));
		}

		$(window).resize(function(){
			element.html(text);
			font = element.css('font-size') +' '+ element.css('font-family');
			particles = [];
			cw = element.width(),
				ch = element.height();
			element.html('');
			canvas = $('<canvas/>').attr({width: cw, height: ch}).css({display: 'inline-block','vertical-align': 'top'}).appendTo(element),
				context = canvas.get(0).getContext("2d");
			drawText();
			scramble();
		});
		drawText();

		function hover(x,y){
			var id = hoverArray.length;
			hoverArray.push([x,y]);

			setTimeout(function(){
				hoverArray[id] = undefined;
			},5000);
		}

		$(document).click(function(){
			hoverArray = [];
		});

		element.parent().on('mousemove touchmove',function(e){
			e.preventDefault();
			var x = e.pageX - element.offset().left;
			var y = e.pageY - element.offset().top;
			hover(x,y);
		});


		var particle = function(x,y,visible,color){
			this.color = 'rgba('+color[0]+','+color[1]+','+color[2]+','+color[3] / 255+')';
			this.visible = visible;
			this.realx = x;
			this.realy = y;

			this.toplace = false;

			this.rate = Math.round(Math.random() * 12) - 8;

			this.spin = Math.round(Math.random() * 2);

			this.x = x;
			this.y = y;

			particles.push(this);
		}
		particle.prototype.draw = function(){
			var l = false;
			for(var i = 0; i < hoverArray.length; i++){
				if(hoverArray[i]){
					if(this.realx >= hoverArray[i][0] - 25 && this.realx <= hoverArray[i][0] + 25 && hoverArray[i]){
						if(this.realy >= hoverArray[i][1] - 25 && this.realy <= hoverArray[i][1] + 25 && hoverArray[i]){
							this.toplace = true;
							l = true;
						}
					}
				}
			}
			if(l == false){
				this.toplace = false;
			}

			if(this.toplace == false){
				if(this.spin == 1){
					this.x = this.realx + Math.floor(Math.sin(currentTime) * this.rate);
				} else if(this.spin == 0){
					this.y = this.realy + Math.floor(Math.cos(-currentTime) * this.rate);
				} else {
					this.x = this.realx + Math.floor(Math.sin(-currentTime) * this.rate);
					this.y = this.realy + Math.floor(Math.cos(currentTime) * this.rate);
				}
			} else {
				if(this.x < this.realx){
					this.x++;
				} else if(this.x > this.realx){
					this.x--;
				}
				if(this.y < this.realy){
					this.y++;
				} else if(this.y > this.realy){
					this.y--;
				}
			}

			if(this.visible == true || this.toplace == true){
				context.fillStyle = this.color;
				context.fillRect(this.x, this.y, 1,1);
			}
		}

		function scramble(){
			for(var y = 1; y < ch; y+=1){
				for(var x = 0; x < cw; x++){
					if(context.getImageData(x, y, 1, 1).data[3] >= 1){
						if(Math.round(Math.random() * 3) >= 2){
							new particle(x,y,false,context.getImageData(x, y, 1, 1).data);
						} else {
							new particle(x,y,true,context.getImageData(x, y, 1, 1).data);
						}
					}
				}
			}
		}
		scramble();
		var requestframe = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
		    // IE Fallback, you can even fallback to onscroll
		    function (callback) {
			    window.setTimeout(callback, 1000 / 60);
		    };
		function loop(){
			var now = new Date().getTime();
			currentTime = (now - startTime) / 1000;
			context.clearRect(0,0,cw,ch);
			for(var i = 0; i < particles.length; i++){
				particles[i].draw();
			}

			requestframe(loop);
		}
		loop();
	}
})();
//header blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/dino2.png", "images/dino2_blink.png" ];
    var el = document.getElementById('main_dino');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1700);
})();
//about blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/headshot.png", "images/headshot_blink.png" ];
    var el = document.getElementById('aboutDoug');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1700);
})();

//recipe blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/chef_blink.png", "images/chef.png" ];
    var el = document.getElementById('chef');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1500);
})();
//game blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/game_dino.png", "images/game_dino_blink.png" ];
    var el = document.getElementById('puzzleDoug');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1500);
})();
//jokes blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/jokes.png", "images/jokes_blink.png" ];
    var el = document.getElementById('jokesDoug');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1500);
})();
//logo blinks
(function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "images/white_logo.png", "images/blink_logo.png" ];
    var el = document.getElementById('logoDoug');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 1500);
})();
