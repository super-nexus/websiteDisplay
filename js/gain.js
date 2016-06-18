$(function(){

	$('.popup').click(function(event) {
		
		var websiteName = $(this).attr('data-pannel');

		console.log(websiteName);

		var path = '../spletne/' + websiteName + '/index.html';

		window.location.href = path;

	});

});



