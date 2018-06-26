
$(document).ready( function() {
    console.log("Hello My Man!");
    $("#menu-container").attr("style", "display:none;");

    $( "#left-button" ).click(function() {
        $( "#left-button" ).css({"box-shadow" : "2px 1.5px #888988"});
        $( "#right-button" ).removeAttr("style");
        $("#menu-container").hide();
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#gd-menu").delay(1000).animate({"width": "50%"});
        $("#ui-menu").delay(1000).animate({"width": "50%"});
        $("#about-container").fadeIn("slow");
        $("#small-logo").fadeOut();
    });

    $( "#right-button" ).click(function() {
        $("#about-container").hide();
        $("#small-logo").fadeIn();
        $( "#right-button" ).css({"box-shadow" : "-2px 1.5px #888988"});
        $( "#left-button" ).removeAttr("style");
        $( "#menu-container" ).fadeIn();
        $("#gd-menu").animate({"width": "50%", "z-index": "999"},500 );
        $("#ui-menu").animate({"width": "50%" , "z-index": "999"}, 500);
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#ui-menu").removeAttr("style");
        $("#gd-menu").removeAttr("style");
    });
    $("#gd-menu").click(function () {
        $("#ui-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#gd-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg.png'); background-color:  #FFDEFD; color: #FFFFFF; background-size: cover; background-position: right; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#design-portfolio").delay(480).fadeIn("fast");
        $("#small-logo").fadeOut();
    });
    $("#ui-menu").click(function () {
        $("#gd-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#ui-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg.png'); background-color:  #FFFACC; color: #FFFFFF; background-size: cover; background-position: left; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#ui-portfolio").delay(480).fadeIn("fast");
        $("#small-logo").fadeOut();
    });
});
