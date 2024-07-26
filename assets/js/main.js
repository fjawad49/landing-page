/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

document.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const scrollPosition = window.scrollY;

    // Adjust this value based on when you want the animation to trigger
    const triggerPoint = window.innerHeight / 1.5;

    if (scrollPosition > triggerPoint) {
        scrollText.classList.add('visible');
    } else {
        scrollText.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTexts = document.querySelectorAll('.scroll-text');

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        scrollTexts.forEach(scrollText => {
            const textPosition = scrollText.getBoundingClientRect().top + window.scrollY + scrollText.clientHeight / 2;

            if (scrollPosition > textPosition) {
                scrollText.classList.add('visible');
            } else {
                scrollText.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case the elements are already in view
});
