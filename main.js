

// This function for DARK-BUTTON.................

function darkbutton()
{
    var subdarkbutton = document.getElementById("sub-dark-mode-button").getAttribute("style");         

    if(subdarkbutton == "left: 0px; color: red; transform: rotate(-360deg);")
    {
        // This code for SUB-DART-MODE-BUTTON.....................

        document.getElementById("sub-dark-mode-button").style.left = "47px";
        document.getElementById("sub-dark-mode-button").style.color = "lime";
        document.getElementById("sub-dark-mode-button").innerHTML = "ON";
        document.getElementById("sub-dark-mode-button").style.transform = "rotate(360deg)";


        // This code for DART-MODE-BUTTON.....................

        document.getElementById("dark-mode-button").style.background = "lime";
        document.getElementById("dark-mode-button").style.boxShadow = "0px 0px 6px lime, 0px 0px 12px lime";


        // This code for DARK-MODE-BUTTON-TEXT................

        document.getElementById("dark-mode-button-text").innerHTML = "Light";
        document.getElementById("dark-mode-button-text").style.left = "8px";


        // This code for BODY-STYLE....................

        document.getElementById("body").style.background = "grey";


        // This code for DARK-MODE-CONTENT...............

        document.getElementById("dark-mode-content").style.color = "white";
    }

    else
    {
        // This code for SUB-DART-MODE-BUTTON.....................

        document.getElementById("sub-dark-mode-button").style.left = "0px";
        document.getElementById("sub-dark-mode-button").style.color = "red";
        document.getElementById("sub-dark-mode-button").innerHTML = "OF";
        document.getElementById("sub-dark-mode-button").style.transform = "rotate(-360deg)";

        // This code for DART-MODE-BUTTON.....................

        document.getElementById("dark-mode-button").style.background = "red";
        document.getElementById("dark-mode-button").style.boxShadow = "0px 0px 6px red, 0px 0px 12px red";

        // This code for DARK-MODE-BUTTON-TEXT................

        document.getElementById("dark-mode-button-text").innerHTML = "Dark";
        document.getElementById("dark-mode-button-text").style.left = "33px";

        // This code for BODY-STYLE....................

        document.getElementById("body").style.background = "black";


        // This code for DARK-MODE-CONTENT...............

        document.getElementById("dark-mode-content").style.color = "black";
    }
}



















// This function for menu button..................

function menufun()
{
    var menudot2 = document.getElementById("menudot2").getAttribute("style");

    if(menudot2 == "visibility: hidden; width: 0px;")
    {
        // This code for menudot2................

        document.getElementById("menudot2").style.visibility = "visible";
        document.getElementById("menudot2").style.width = "35px";


        // This code for menudot1................

        document.getElementById("menudot1").style.position = "absalute";
        document.getElementById("menudot1").style.top = "7px";
        document.getElementById("menudot1").style.transform = "rotate(0deg)";
        document.getElementById("menudot1").style.background = "white";


        // This code for menudot3................

        document.getElementById("menudot3").style.position = "absalute";
        document.getElementById("menudot3").style.bottom = "7px";
        document.getElementById("menudot3").style.transform = "rotate(-0deg)";
        document.getElementById("menudot3").style.background = "white";


        // This code for menubox...................

        document.getElementById("menubox").style.width = "0%";
        document.getElementById("menubox").style.height = "0px";
        document.getElementById("menubox").style.visibility = "hidden";
        document.getElementById("menubox").style.background = "transparent";
        document.getElementById("menubox").style.color = "transparent";
        document.getElementById("menubox").style.fontSize = "0px";
    }

    else
    {
        // This code for menudot2................

        document.getElementById("menudot2").style.visibility = "hidden";
        document.getElementById("menudot2").style.width = "0px";


        // This code for menudot1................

        document.getElementById("menudot1").style.position = "absalute";
        document.getElementById("menudot1").style.top = "unset";
        document.getElementById("menudot1").style.transform = "rotate(-45deg)";
        document.getElementById("menudot1").style.background = "linear-gradient(to left, blue, red, lime)";


        // This code for menudot3................

        document.getElementById("menudot3").style.position = "absalute";
        document.getElementById("menudot3").style.bottom = "unset";
        document.getElementById("menudot3").style.transform = "rotate(45deg)";
        document.getElementById("menudot3").style.background = "linear-gradient(to left, fuchsia, black, white)";


        // This code for menubox...................

        document.getElementById("menubox").style.width = "70%";
        document.getElementById("menubox").style.height = "400px";
        document.getElementById("menubox").style.visibility = "visible";
        document.getElementById("menubox").style.background = "black";
        document.getElementById("menubox").style.color = "white";
        document.getElementById("menubox").style.fontSize = "25px";

    }
}