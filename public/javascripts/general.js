function initYaMap () {
	var mmpa;
	function init()
	{
	    mmap= new ymaps.Map('yamap',
	    {
	        center: [56.8298,60.6158],
	        controls: ['zoomControl', 'fullscreenControl'],
	        zoom: 16
	    });

	    myPlacemark = new ymaps.Placemark([56.8298,60.6158], {
            hintContent: 'г. Екатеринбург ул Белинского д 56'
        }, {
        	preset: 'islands#redIcon'
        });

         mmap.geoObjects.add(myPlacemark);
         mmap.behaviors.disable("scrollZoom");
	}

	ymaps.ready(init);
}

$(function() {
	$('.js-nav a').on('click', function(e) {
		e.preventDefault();
		var tar = $( $(this).attr("href") )
		var offset = tar.offset().top;
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
	})
});