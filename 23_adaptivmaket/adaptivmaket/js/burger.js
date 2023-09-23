$(document).ready(function () {
	$('.menu__burger').click(function () {
		$('.menu__burger,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});