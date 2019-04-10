// Inicio de la presentación de la página


$(document).ready(function(){
		$("#men-ini").hide();
		$("#men-ini + h6").hide();
		$(".lead").hide();
		$(".inner > p").hide();
		
   		/*$("#men-ini").fadeIn(4000,function(){
   			$("#men-ini").css("font-size","48px");*/
   		  $("#men-ini").css({
   		  	
   		  	'font-size': "3em"
   		  });
   		  $("#men-ini").delay( 300 ).fadeIn( 2500 , function(){
   		  		$("#men-ini + h6").delay( 200 ).fadeIn( 1500 , function() {
   		  			$(".lead").delay( 200 ).fadeIn( 1000 , function() {
   		  				$(".inner > p").delay (200).fadeIn (1000);
   		  			});
   		  		});
   		  });
   		  
   		  
   		});
   		
   


