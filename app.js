let isDark = false

function changeMode () {
 if (isDark === true) {
    $("body").css("background-color","white").css("color","#111")
    $("h1").css("color","#111")
    $("button").innertext = "Dark";
    
} else {
     $("body").css("background-color","#111").css("color","aliceBlue")
     $("h1").css("color","aliceBlue")
     $("button").innertext = "light";
 }
    isDark =!isDark;
}
