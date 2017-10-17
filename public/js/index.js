
$(document).ready(function() {
	// for the active class in the navbar/ it grabs the path of the active url
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('nav > a[href="'+pathname+'"]').addClass('active');

	$('nav > a[href="'+pathname+'"]').click(function (e) {
  		e.preventDefault();
	});


	var h1 = $('h1');
	var h2 = $('h2');
	var p =$('p');
	var btn =$('.btn');
	var skillbtn = $('.skillBtn');	
	var jb = $('.jumbo');
	var hartej = $('.aboutImg')
	var inc= 0.4;

	//animating the object
	TweenLite.from(h1, 1,{y:-25, autoAlpha:0, ease:Power1.easeOut, delay:0.2});
	TweenLite.from(h2, 1,{y:-25, autoAlpha:0, ease:Power1.easeOut, delay:0.6});
	TweenLite.from(btn, 1,{y:-25, autoAlpha:0, ease:Power1.easeOut, delay:0.9});
	TweenLite.from(skillbtn, 1,{y:-25, autoAlpha:0, ease:Power1.easeOut, delay:2});
	$('p').each(function(){
	 	inc += 0.4;
		TweenLite.from($(this), 1,{y:-25, autoAlpha:0, ease:Power1.easeOut, delay:inc});
	});

	TweenLite.from(jb, 2,{y:-100, autoAlpha:0, ease:Bounce.easeOut, delay:0.8});
	TweenLite.from(hartej, 2,{y:-100,x:30, autoAlpha:0, ease:SlowMo.easeOut, delay:0.8});
});
	
	$(".textZone").css("display", "none");
    $(".textZone").fadeIn(200);



