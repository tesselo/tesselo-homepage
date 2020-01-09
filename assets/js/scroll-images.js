$(document).ready(function() {

	/* Function scroll images */

	window.document.addEventListener('scroll', function () {
    var images = Array.from(document.querySelectorAll('.scroll-effect')),
        limits = [images[0].offsetTop - 200, images[images.length - 1].offsetTop];

    if (window.scrollY < limits[1]) {
      return images.map(function (el) {
        el.classList.add('sticky');
      });
    } else {
      return images.map(function (el) {
      });
    }
  });
  });
