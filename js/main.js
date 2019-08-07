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
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    name:"Francis of Assisi"
    },
    {
      quote:"Believe you can and you're halfway there.",
      name:"Theodore Roosevelt"
    },
    {
      quote:"It does not matter how slowly you go as long as you do not stop.",
      name:"Confucius"
    },
    {
      quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      name:"Thomas A. Edison"
    },
    {
      quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
      name:"Confucius"
    },
    {
      quote:"Don't watch the clock; do what it does. Keep going.",
      name:"Sam Levenson"
    },
    {
      quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name:"Ayn Rand"
    },
    {
      quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name:"Ayn Rand"
    },
    {
      quote:"Expect problems and eat them for breakfast.",
      name:"Alfred A. Montapert"
    },
    {
      quote:"Start where you are. Use what you have. Do what you can.",
      name:"Arthur Ashe"
    },
    {
      quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      name:"Samuel Beckett"
    },
    {
      quote:"Be yourself; everyone else is already taken.",
      name:"Oscar Wilde"
    },
    {
      quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      name:"Albert Einstein"
    },
    {
      quote:"Always remember that you are absolutely unique. Just like everyone else.",
      name:"Margaret Mead"
    },
    {
      quote:"Do not take life too seriously. You will never get out of it alive.",
      name:"Elbert Hubbard"
    },
    {
      quote:"People who think they know everything are a great annoyance to those of us who do.",
      name:"Isaac Asimov"
    },
    {
      quote:"Procrastination is the art of keeping up with yesterday.",
      name:"Don Marquis"
    },
    {
      quote:"Get your facts first, then you can distort them as you please.",
      name:"Mark Twain"
    },
    {
      quote:"A day without sunshine is like, you know, night.",
      name:"Steve Martin"
    },
    {
      quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
      name:"Ellen DeGeneres"
    },
    {
      quote:"Don't sweat the petty things and don't pet the sweaty things.",
      name:"George Carlin"
    },
    {
      quote:"Always do whatever's next.",
      name:"George Carlin"
    },
    {
      quote:"Atheism is a non-prophet organization.",
      name:"George Carlin"
    },
    {
      quote:"Hapiness is not something ready made. It comes from your own actions.",
      name:"Dalai Lama"
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


	 $('.ink').each(function(){
		$(this).html(wrapWords(this));

		$(this).find('.word').each(function(){
			inkout($(this));
			$(this).addClass('initialized');
		});
	});

	$('body').on('DOMNodeInserted', function(e) {
		if ($(e.target).is('.ink') && $(e.target).hasClass('initialized') == false) {
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
			},1300);
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
