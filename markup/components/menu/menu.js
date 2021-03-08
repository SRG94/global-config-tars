$(document).on('click','.menu__item',function() {
	var $this = $(this);
	var $id = $($this).attr('href');
	var $top = $($id).offset().top;
	$('html, body').animate({scrollTop: $top},1000);
});

$(document).on('click','.js-menu',function() {
	$(this).toggleClass('_active');
	$('.menu__list').slideToggle('300');
});