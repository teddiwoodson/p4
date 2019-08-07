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
