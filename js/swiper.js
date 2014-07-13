$el = $(".swiper-gallery-wrapper"); 
$swiperItem = $(".swiper-item");
$swiperItem.on("swipeleft", function(e){
	moveImage("left", this);
});

$swiperItem.on("swiperight", function(e){
	moveImage("right", this);
});

function moveImage(direction, activeItem, sliderWrapper){
	var $activeElement = $(activeItem);
	//var $childEl = $activeElement.attr('class').split(" ")[0];
	var avgElWidth = $el.width()/$el.children().size();
	console.log(avgElWidth);
	if(direction === "left"){
		console.log("left");
		$swiperItem.animate({left: ("-" + avgElWidth)}, 500);
	} else {
		console.log("right");
		$swiperItem.animate({left: avgElWidth}, 500);
	}
	console.log($activeElement.offset().left);
}