var backgrounds = [
    "Pics/3.jpg",
    "Pics/4.jpg",
    "Pics/6.jpg",
    "Pics/Lookup.png",
];

$(".side-bar > a").siblings().hide();
$(".side-bar > a").click(function() {

    $(this).siblings().toggle();
    console.log("This button is working"); 
    $(this).toggleClass("open"); 

    $(".back1").css("background-image", "url(" + backgrounds[0] + ")");
    $(".back2").css("background-image", "url(" + backgrounds[1] + ")");
    $(".back3").css("background-image", "url(" + backgrounds[2] + ")");
    $(".back4").css("background-image", "url(" + backgrounds[3] + ")");

    if ($(this).hasClass("open")) {
        $(".side-bar").animate({
            width: "40%"
        }, 500, function(){
            $(".side-bar > a").text("Close");
        });   
    } else {
        $(".side-bar").animate({
            width: "12%"
        }, 3000, function(){
            $(".side-bar > a").text("Open");
        });
    }

});

$(".newBackgrounds > div").click(function(){

    $(this).toggleClass("addBorder");

    $(this).siblings().removeClass("addBorder");
});





$("#updateButton").click(function(){

    var newIntroText = $("#IntroText").val();
    var newIntroTextColor = $("#IntroTextColor").val();

    $(".img-container > p").text(newIntroText);
    $(".img-container > p").css("color", newIntroTextColor);

    var jobTitle = $("#jobTitle").val();
    var jobTitleColor = $("#jobTitleColor").val();

    $(".img-container > h1").text(jobTitle);
    $(".img-container > h1").css("color", jobTitleColor);

    if( $(".back1").hasClass("addBorder") ) {
        
        $("header").css("background-image", "url(" + backgrounds[0] + ")" );

    } else if ( $(".back2").hasClass("addBorder") ) {  
        $("header").css("background-image", "url(" + backgrounds[1] + ")" );

    } else if ( $(".back3").hasClass("addBorder") ) {
        $("header").css("background-image", "url(" + backgrounds[2] + ")" );

    }  else  { 
        $("header").css("background-image", "url(" + backgrounds[3] + ")" );
    }


console.log(newIntroText);
console.log(newIntroTextColor);
});



/*
 $(".sidebar").animate(function){
        width: 40%;
    }, 10000, function {
        $(".side-bar").removeClass("open");
        $(".side-bar .title p").text("open");
    });
*/