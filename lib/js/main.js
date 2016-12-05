$(document).ready(function() {
	function fixNum() {
		$('.appena-uscito .numero').css('line-height', $('.appena-uscito').height() + "px");
		$('.penultimo-uscito .numero').css('line-height', $('.penultimo-uscito').height() + "px");
	}
	$(window).resize(function() {
		fixNum();
	});
	fixNum();

	$(".tile").click(function() {
		if(!$(this).hasClass('last')) {
			id = $(this).attr('class').replace('tile tile-','');
			if($('.tile.last').length > 0) {
				$('.tile.last').removeClass('.last').find('.uscito').addClass('animated flipInX');
				$penultimo_old = $('.penultimo-uscito span');
				$penultimo_new = $("<span>"+ $('.appena-uscito .numero span').html() +"</span>").hide();
				$('.penultimo-uscito .numero').append($penultimo_new);
				$penultimo_new.fadeIn();
				$penultimo_old.fadeOut();
			}
			$(this).addClass('last').find('.appena').addClass('animated tada');

			$appena_old = $('.appena-uscito span');
			$appena_new = $("<span>"+ parseInt(id) +"</span>").hide();
			$('.appena-uscito .numero').append($appena_new);
			$appena_new.addClass('animated bounce');
			$appena_old.fadeOut().remove();
		}
	});
});