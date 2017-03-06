// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    function iframeModalOpen(){

		// impostiamo gli attributi da aggiungere all'iframe es: data-src andrà ad impostare l'url dell'iframe
		$('.modalButton').on('click', function(e) {
			var src = $(this).attr('data-src');
			var width = $(this).attr('data-width') || 640; // larghezza dell'iframe se non impostato usa 640
			var height = $(this).attr('data-height') || 360; // altezza dell'iframe se non impostato usa 360

			var allowfullscreen = $(this).attr('data-video-fullscreen'); // impostiamo sul bottone l'attributo allowfullscreen se è un video per permettere di passare alla modalità tutto schermo

			// stampiamo i nostri dati nell'iframe
			$("#myModal iframe").attr({
				'src': src,
				'height': height,
				'width': width,
				'allowfullscreen':''
			});
		});

		// se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
		$('#myModal').on('hidden.bs.modal', function(){
			$(this).find('iframe').html("");
			$(this).find('iframe').attr("src", "");
		});
	}

  $(document).ready(function(){
		iframeModalOpen();
  });

})(jQuery); // End of use strict
