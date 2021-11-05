$(function(){
	$('#first').click(function(){
		$('p').css('color', 'blue');
		$('p').fadeOut('slow');
		$('p').delay(1000);
		$('p').fideIn('slow');
	});
	$('#second').click(function(){
		$('p').css('background-color', 'red');
		$('p').fadeOut('slow');
		$('p').delay(1000);
		$('p').fideIn('slow');
	});
});

