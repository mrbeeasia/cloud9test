$(document).ready(function () {
	
   // Start reading config
   	var facebook,linkedin,twitter,flickr,rss,googleplus,youtube;
	$.get(
	'config/config.xml', // Read release time from config.xml file
	function(data) {
		$(data).find('info').each(function(){
			facebook = $(this).find('facebook').text();
			$('.facebook a').attr('href',facebook);
			
			linkedin = $(this).find('linkedin').text();
			$('.linkedin a').attr('href',linkedin);
			
			twitter = $(this).find('twitter').text();
			$('.twitter a').attr('href',twitter);
			
			flickr = $(this).find('flickr').text();
			$('.flickr a').attr('href',flickr);
			
			rss = $(this).find('rss').text();
			$('.rss a').attr('href',rss);
			
			googleplus = $(this).find('googleplus').text();
			$('.googleplus a').attr('href',googleplus);
			
			youtube = $(this).find('youtube').text();
			$('.youtube a').attr('href',youtube);
		});
	 },'xml');	
	 
	            
	// Start Javascript for Subscription Form
	$('.subscriptionForm').submit(function(){
		var email = $('#email').val();
		$.ajax({
		url:'email.php',
		type :'POST',
		dataType:'json',
		data: {email: email},
                success: function(data){
				if(data.error){
					$('#error').fadeIn();
				}else{
					$('#success').fadeIn();
					$("#error").hide();
				}
			}
		});
		return false;
	});
                
	$('#email').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});
	$('#email').keydown(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});


	// Start Readng Config, Reveal.js Controls	
                
	var effect, time;
	$.get(
	'config/config.xml', // Read release time from config.xml file
	function(data) {
		$(data).find('info').each(function(){
			time = $(this).find('time').text();
			effect = $(this).find('effect').text();
	});   
		
		
		

	Reveal.initialize({ // Start Reveal.js Controls
		controls: true,
		progress: true,
		history: true,
		center: true,
		mouseWheel: true,
		width: 1146,
		theme: Reveal.getQueryHash().theme,
		transition: Reveal.getQueryHash().transition || effect,
		dependencies: [
			{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
		]
	});
      
		
		$("#countdown").countdown({ // Arrange countdown procedure to make release time
			date: time,
			format: "on"
		});
                }, 
                'xml'
        );

});

//PlaceHolder
function checkPlace(_this, status){
	if( (_this.value == 'Enter Your Email Address') && (status == 'focus') ){
		_this.value = '';
	}else if( (_this.value == '') && (status == 'blur') ){
		_this.value = 'Enter Your Email Address';
	}
}
