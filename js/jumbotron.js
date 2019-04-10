$(document).ready(function(){
	$("body").fadeOut(800, function(){
		$("body").fadeIn(2000);
	});
	


	
	$(".container > .row > .col-md-4 > p:even").hover(function()
	{
		$(this).css({
			'padding-left' : 10,
			'border-left' : "solid 1px",
			'font-size': '1rem',

		});
	});

	$(".container > .row > .col-md-4 > p:even").mouseleave(function()
	{
		$(this).css({
			'padding-left' : 0,
			'border-left' : "none",
			'font-size': '0.90rem',


		});
	});
			
	

		
			
	
	
		
	});


