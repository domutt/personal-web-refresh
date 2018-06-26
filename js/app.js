
$(document).ready( function() {
    console.log("Hello My Man!");
    $("#menu-container").attr("style", "display:none;");

    $( "#left-button" ).click(function() {
        $("#left-button").css({"box-shadow" : "2px 1.5px #888988"});
        $("#right-button").removeAttr("style");
        $("#gd-menu").animate({"width": "50%"}, 2000);
        $("#ui-menu").animate({"width": "50%"}, 2000);
        $("#menu-container").fadeOut("fast");
        $("#design-portfolio").fadeOut("fast");
        $("#ui-portfolio").fadeOut("fast");
        $("#about-container").fadeIn("slow");
        $("#small-logo").fadeOut("fast");
    });
    $("#right-button").click(function() {
        $("#about-container").fadeOut("fast");
        $("#small-logo").fadeIn();
        $("#right-button").css({"box-shadow" : "-2px 1.5px #888988"});
        $("#left-button").removeAttr("style");
        $("#menu-container" ).fadeIn();
        $("#gd-menu").animate({"width": "50%", "z-index": "999"},500);
        $("#ui-menu").animate({"width": "50%" , "z-index": "999"}, 500);
        $("#design-portfolio").hide();
        $("#ui-portfolio").hide();
        $("#ui-menu").removeAttr("style");
        $("#gd-menu").removeAttr("style");
    });
    $("#gd-menu").click(function () {
        $("#ui-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#gd-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg.png'); background-color:  #FFDEFD; color: #FFFFFF; background-size: 1440px; background-position: right; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#design-portfolio").delay(480).fadeIn("slow");
        $("#small-logo").fadeOut("fast");
    });
    $("#ui-menu").click(function () {
        $("#gd-menu").animate({"width": "0%", "z-index": "0"}, 500).removeAttr();
        $("#ui-menu").animate({"width": "100%", "z-index": "999"}, 500).attr("style", "background-image: url('../images/about-bg-reverse.png'); background-color:  #FFFACC; color: #FFFFFF; background-size: 1440px; background-position: left; background-repeat: no-repeat; background-blend-mode: multiply;");
        $("#ui-portfolio").delay(480).fadeIn("slow");
        $("#small-logo").fadeOut("fast");
    });
});

//# sourceMappingURL=../maps/app.js.map
