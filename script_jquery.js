$(function(){
	$('#first').click(function(){
		$('p').css('color', 'blue');
		$('p').fadeOut();
		$('p').delay(1000);
		$('p').fideIn();
	});
	$('#second').click(function(){
		$('p').css('background-color', 'red');
		$('p').fadeOut('slow');
		$('p').delay(1000);
		$('p').fideIn('slow');
	});
	$('#save').click(function(){
		$('p').css('background-color','blue')
		$('#message')
		.css('background-color', 'blue')
		.text("Cor alterado com sucesso!")
		.css({border:'1px solid red', backgroundColor: '#d0d0d0'}).
		delay(3000).fadeOut('fast');
		
	});
});

