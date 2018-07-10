//
$(window).on('load', function(){
    $("#loader").fadeOut(function(){
        $(".fast-inner").delay(600).fadeIn(1000);
        $(".welcome-inner").fadeIn(800);
    });
});
$(document).ready( function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()>10) {
            $("#small-logo").fadeOut();
        }
        else {
            $("#small-logo").fadeIn();
        }
     });

    // $("#main-content").on('scroll', function(event) {
    //     if (event.originalEvent.wheelDelta >= 10) {
    //         // $("#small-logo").fadeIn();
    //     }
    //     else {
    //         $("#small-logo").fadeOut();
    //     }
    // });
    $( "#left-button" ).click(function() {
        $("#small-logo").stop().fadeOut();
        $("#logo").fadeIn();
        $("#project-1-content").slideUp("slow", function (){
            $( "#project-1-button" ).removeClass('rotate');
        });
        $("#project-2-content").slideUp("slow", function (){
            $( "#project-2-button" ).removeClass('rotate');
        });
        $("#super-1-content").slideUp("slow", function (){
            $( "#super-1-button" ).removeClass('rotate');
        });
        $( "#splash-container").fadeOut(500);
        $( "#left-button" ).css({"box-shadow" : "2px 1.5px #888988"});
        $( "#right-button" ).removeAttr("style");
        $("#hide-menu").hide();
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#gd-menu").delay(1000).animate({"width": "50%"});
        $("#ui-menu").delay(1000).animate({"width": "50%"});
        $("#about-container").scrollTop(0).fadeIn("slow");
        $(".descript").removeAttr("style");
        // $("#small-logo").fadeOut();
        // $("#footer-container").fadeIn();
    });

    $( "#right-button" ).click(function() {
        $("#small-logo").fadeOut();
        $("#logo").fadeIn();
        $("#project-1-content").slideUp("slow", function (){
            $( "#project-1-button" ).removeClass('rotate');
        });
        $("#project-2-content").slideUp("slow", function (){
            $( "#project-2-button" ).removeClass('rotate');
        });
        $("#super-1-content").slideUp("slow", function (){
            $( "#super-1-button" ).removeClass('rotate');
        });
        $( "#splash-container").fadeOut(500);
        $("#about-container").hide();
        // $("#small-logo").fadeOut();
        $( "#right-button" ).css({"box-shadow" : "-2px 1.5px #888988"});
        $( "#left-button" ).removeAttr("style");
        $( "#hide-menu" ).fadeIn();
        $("#gd-menu").animate({"width": "50%", "z-index": "999"},500 );
        $("#ui-menu").animate({"width": "50%" , "z-index": "999"}, 500);
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#ui-menu").removeAttr("style");
        $("#gd-menu").removeAttr("style");
        $(".descript").removeAttr("style");
        // $("#footer-container").fadeIn();
    });
    $("#gd-menu").click(function () {
        $("#small-logo").fadeIn();
        $("#ui-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#gd-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg.png'); background-color:  #FFDEFD; color: #FFFFFF; background-size: 1440px; background-position: right; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#design-portfolio").delay(480).fadeIn("fast");
        $(".descript").attr("style", "color: grey");
        // $("#small-logo").fadeOut();
        // $("#footer-container").fadeOut();
    });
    $("#ui-menu").click(function () {
        $("#small-logo").fadeIn();
        $("#gd-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#ui-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg-reverse.png'); background-color:  #FFFACC; color: #FFFFFF; background-size: 1440px; background-position: left; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#ui-portfolio").delay(480).fadeIn("fast");
        // $("#small-logo").fadeOut();
        $(".descript").attr("style", "color: grey");
        // $("#footer-container").fadeOut();
    });



    $("#starz-proj-1").click( function (){
        $("#logo").fadeOut();
        // $("#project-1-title").scrollTop();
            // console.log($(this).offset().top);
        $("#project-1-content").slideToggle("slow", function(){
            if ($("#starz-proj-1").is(":visible")) {
                $("html, body").animate({
                    scrollTop: $("#starz-proj-1").offset().top}, 800);

            }
            $( "#project-1-button" ).toggleClass('rotate');
            $("#project-2-content").slideUp("slow", function (){
                $( "#project-2-button" ).removeClass('rotate');
            });
            $("#super-1-content").slideUp("slow", function (){
                $( "#super-1-button" ).removeClass('rotate');
            });

        });
        // $("#starz-proj-1").animate({"top": "0px"},1000);
    });
    $("#starz-proj-2").click( function (){
        // $(this).scrollTop(0);
        $("#logo").fadeOut();
        // $('html,body').animate({scrollTop: $(this).offset().top}, 800);
        $("#project-2-content").slideToggle("slow", function(){
            if ($("#starz-proj-2").is(":visible")) {
                $("html, body").animate({
                    scrollTop: $("#starz-proj-2").offset().top}, 800);

            }
            $( "#project-2-button" ).toggleClass('rotate');
            $("#project-1-content").slideUp("slow", function (){
                $( "#project-1-button" ).removeClass('rotate');
            });
            $("#super-1-content").slideUp("slow", function (){
                $( "#super-1-button" ).removeClass('rotate');
            });

        });
    });
    $("#super-proj-1").click( function (){
        $("#logo").fadeOut();
        $('html,body').animate({scrollTop: $(this).offset().top}, 800);
        // $(this).scrollTop(0);
        $("#super-1-content").slideToggle("slow");
        $( "#super-1-button" ).toggleClass('rotate');
        $("#project-1-content").slideUp("slow", function (){

            $( "#project-1-button" ).removeClass('rotate');
        });
        $("#project-2-content").slideUp("slow", function (){
            $( "#project-2-button" ).removeClass('rotate');
        });
    });
    // $(function() {
    	// $( ".project-list" ).accordion({
    	// 	heightStyle: "content",
    	// 	collapsible: true,
    	// 	active: false,
    	// 	activate: function( event, ui ) {
    	// 		if(!$.isEmptyObject(ui.newHeader.offset())) {
    	// 			$('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top }, 'slow');
    	// 		}
    	// 	}
    	// });
    // });

    // $("#project-3-button").click( function (){
    //     $("#project-1-content").slideUp("slow", function(){
    //         $( "#project-1-button" ).removeClass('rotate');
    //
    //     });
    // });
});
