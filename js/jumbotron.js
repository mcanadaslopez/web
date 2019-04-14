$(document).ready(function(){
	/*$("body").fadeOut(800, function(){
		$("body").fadeIn(2000); */
	
	$(".jumbotron > .container > .display-4").hover(function()
	{
		$(this).css({
		'color': 'red',
		'text-shadow': '3px 2px #F78181',
		});
	});

	$(".jumbotron > .container > .display-4").mouseleave(function()
	{
		$(this).css({
		'color': 'white',
		'text-shadow': 'none',
		});
	});


	
	$(".container > .row > .col-md-4 > p:even").hover(function()
	{
		$(this).prev().css({
			'color': '#BDBDBD',

		});
		$(this).css({
			
			'padding-left' : 10,
			'border-left' : "solid 1px",
			'border-left-color' : 'red',
			'font-size': '1rem',

		});
	});

	$(".container > .row > .col-md-4 > p:even").mouseleave(function()
	{
		$(this).prev().css({
			'color': 'white',
		});
		$(this).css({
			
			'padding-left' : 0,
			'border-left' : "none",
			'font-size': '0.90rem',



		});
	});
			
	
	
		
			
	
	
		
});




