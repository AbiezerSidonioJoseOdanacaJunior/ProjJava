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

	$('#l2').click(function(){
		$('#i1').hide();
		$('#i3').hide();
		$('#i4').hide();
		$('#i5').hide();
		$('#i2').show();
	});

	$('#l3').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i4').hide();
		$('#i5').hide();
		$('#i3').show();
	});


	$('#l4').click(function(){
		$('#i3').hide();
		$('#i1').hide();
		$('#i2').hide();
		$('#i5').hide();
		$('#i4').show();
	});

	$('#l5').click(function(){
		$('#i4').hide();
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i5').show();
	});

	$('#l1').click(function(){
		$('#i4').hide();
		$('#i5').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i1').show();
	});
});

