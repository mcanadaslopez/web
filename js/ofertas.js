$(document).ready(function(){
	/*$("body").fadeOut(800, function(){
		$("body").fadeIn(2000); */
	
	$(".jumbotron > .container > .jumbotron-heading").hover(function()
	{
		$(this).css({
		'color': 'red',
		'text-shadow': '3px 2px #F78181',
		});
	});

	$(".jumbotron > .container > .jumbotron-heading").mouseleave(function()
	{
		$(this).css({
		'color': 'white',
		'text-shadow': 'none',
		});
	});


	
	$(".jumbotron > .container > .lead").hover(function()
	{
		$(this).prev().css({
			'color': '#BDBDBD',

		});
		$(this).css({
			
			'padding-left' : 10,
			'border-left' : "solid 1px",
			'border-left-color' : 'red',
			'font-size': '1.5rem',

		});
	});

	$(".jumbotron > .container > .lead").mouseleave(function()
	{
		$(this).prev().css({
			'color': 'white',
		});
		$(this).css({
			
			'padding-left' : 0,
			'border-left' : "none",
			'font-size': '1.2rem',



		});
	});
			
	
	
		
			
	
	
		
});