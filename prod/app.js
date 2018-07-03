//
$(window).on('load', function(){
    $("#loader").fadeOut(function(){
        // $(".me").fadeIn();
        // $(".what").delay(1000).fadeIn();
        $(".fast-inner").delay(600).fadeIn(1000);
        $(".welcome-inner").fadeIn(800);
    });
});
$(document).ready( function() {
    console.log("Hello My Man!");

    $("#main-content").bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            console.log('Scroll UP');
        }
        else {
            console.log('Scroll DOWN');
        }
    });
    $( "#main-content" ).scroll(function() {
        // $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
    });
    $( "#left-button" ).click(function() {
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
        $("#small-logo").fadeOut();
    });

    $( "#right-button" ).click(function() {
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
        $("#small-logo").fadeIn();
        $( "#right-button" ).css({"box-shadow" : "-2px 1.5px #888988"});
        $( "#left-button" ).removeAttr("style");
        $( "#hide-menu" ).fadeIn();
        $("#gd-menu").animate({"width": "50%", "z-index": "999"},500 );
        $("#ui-menu").animate({"width": "50%" , "z-index": "999"}, 500);
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#ui-menu").removeAttr("style");
        $("#gd-menu").removeAttr("style");
    });
    $("#gd-menu").click(function () {
        $("#ui-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#gd-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg.png'); background-color:  #FFDEFD; color: #FFFFFF; background-size: 1440px; background-position: right; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#design-portfolio").delay(480).fadeIn("fast");
        $("#small-logo").fadeOut();
    });
    $("#ui-menu").click(function () {
        $("#gd-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#ui-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg-reverse.png'); background-color:  #FFFACC; color: #FFFFFF; background-size: 1440px; background-position: left; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#ui-portfolio").delay(480).fadeIn("fast");
        $("#small-logo").fadeOut();
    });
    $("#project-1-button").click( function (){
        $("#project-1-content").slideToggle("slow");
        // $("#starz-proj-1").animate({"top": "0px"},1000);
        $( "#project-1-button" ).toggleClass('rotate');
        $("#project-2-content").slideUp("slow", function (){
            $( "#project-2-button" ).removeClass('rotate');
        });
        $("#super-1-content").slideUp("slow", function (){
            $( "#super-1-button" ).removeClass('rotate');
        });
    });
    $("#project-2-button").click( function (){
        $("#project-2-content").slideToggle("slow");
        $( "#project-2-button" ).toggleClass('rotate');
        $("#project-1-content").slideUp("slow", function (){
            $( "#project-1-button" ).removeClass('rotate');
        });
        $("#super-1-content").slideUp("slow", function (){
            $( "#super-1-button" ).removeClass('rotate');
        });
    });
    $("#super-1-button").click( function (){
        $("#super-1-content").slideToggle("slow");
        $( "#super-1-button" ).toggleClass('rotate');
        $("#project-1-content").slideUp("slow", function (){
            $( "#project-1-button" ).removeClass('rotate');
        });
        $("#project-2-content").slideUp("slow", function (){
            $( "#project-2-button" ).removeClass('rotate');
        });
    });
    // $("#project-3-button").click( function (){
    //     $("#project-1-content").slideUp("slow", function(){
    //         $( "#project-1-button" ).removeClass('rotate');
    //
    //     });
    // });
});
