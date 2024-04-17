window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

function moveImages(event) {
  var containerWidth = document.getElementById('imageContainer').offsetWidth;
  var mouseX = event.clientX;

  var ratio = mouseX / containerWidth;

  var leftTranslate = -100 * ratio;
  var rightTranslate = 100 - (100 * ratio);

  document.getElementById('leftImage').style.transform = 'translateX(' + leftTranslate + '%)';
  document.getElementById('rightImage').style.transform = 'translateX(' + rightTranslate + '%)';
}
