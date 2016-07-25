function initYaMap () {
	var mmpa;
	function init()
	{
	    mmap= new ymaps.Map('yamap',
	    {
	        center: [56.844886,60.591168],
	        controls: ['zoomControl', 'fullscreenControl'],
	        zoom: 16
	    });

	    myPlacemark = new ymaps.Placemark([56.845132,60.589762], {
            hintContent: 'г. Екатеринбург ул Бориса Ельцина 5, 3 этаж. БЦ Ельцин Центр.'
        }, {
        	preset: 'islands#redIcon'
        });

         mmap.geoObjects.add(myPlacemark);
         mmap.behaviors.disable("scrollZoom");
	}

	ymaps.ready(init);
}

$(function() {
	$('.js-nav a').not('#nav-tel a').on('click', function(e) {
		e.preventDefault();
		var tar = $( $(this).attr("href") )
		var offset = tar.offset().top -90;
		$('html, body').animate({
			scrollTop: offset
		}, 450)
	});

	$('input[type="tel"]').mask('+7 (999)-999-99-99')
	initYaMap (); 

	$('.modal--bitrix .js-form').on('submit', function(e) {
		e.preventDefault();
		var form = $($(this).closest('.modal--bitrix').find('.form-front'));
		var back = $($(this).closest('.modal--bitrix').find('.form-back'));

		var ajaxOpts = {
			method: $(this).attr('method'),
			data: $(this).serialize(),
			url: $(this).attr('action')
		};


		$.ajax(ajaxOpts).always(function() {
			form.slideUp();
			back.slideDown();
		})
	});

	$('.modal--bitrix').on('show.bs.modal', function (e) {
		var form = $($(this).find('.form-front'));
		var back = $($(this).find('.form-back'));
		form.show();
		back.hide();
	});

	$('.b-feedGallery').owlCarousel({
		items: 1,
		singleItem: true,
		margin: 20,
		dotsEach: true,
		loop: true,
		autoplay: true,
    autoplayTimeout: 5000,
    responsive: false,
    autoplayHoverPause: true
	});
});