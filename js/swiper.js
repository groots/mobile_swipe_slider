$el = $(".swiper-gallery-wrapper"); 

$el.on("swipeleft", function(){
	rotateImage("left",".swiper-item");
});

$el.on("swiperight", function(){
	rotateImage("right",".swiper-item");
});

function rotateImage(direction, dataGroup, sliderWrapper){
	var dataSeries = $('dataGroup');
	var $activeElement = $el.find(".active");
	//dataSeries.each(function(){
		//$el.animate({right: "300px"}, 500, 'ease-in-out');
	//});
	var $childEl = $activeElement.attr('class').split(" ")[0];
	var avgElWidth = $el.width()/$el.children().size();
	console.log(avgElWidth);
}