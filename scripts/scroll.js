$('#link').click(function(e){				
	e.preventDefault();
    var strAncla=$(this).attr('href');
	$('body,html').stop(true,true).animate({				
		scrollTop: $(strAncla).offset().top
	},1000);
});