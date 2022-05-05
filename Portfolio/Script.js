  var firstName = "Muyiwa";

  var lastName = "Adeniyi";
       
  var myColor = "blue";
  var myLocation = "space";


/*
  if (myLocation == "space") {
  3    $("header").css("background-image", "url(/Pics/planet.jpg)");
  } else {
      $("header").css("background-image", "url(/Pics/museum.jpg)");
  }
  */

  $("<h3 class='skillsTitle'>My current Skills</h3>").insertAfter("#my-name + p + p ");

  var skills = ["JavaScipt", "PHP", "Python", "C#", "Node.JS"];
  
  var skillsLength = skills.length;

  $("<ul class='mySkills'></ul>").insertAfter(".skillsTitle");

  for (var i = 0; i < skillsLength; i++) {
       $("<li>" + skills[i] + "</li>").appendTo(".mySkills") 
   
  }

/*
  $(".myButton").click( function() {          // or  $(".mySkills + a").click( function() { if you do not craete myButtpn class there

    console.log("This button is working");
 
     $(".mySkills li:nth-child(3)").css("background-color", "red");
  
   }
   );
 
   /*
  $(".btn-work").click( function() {

   // $(".navigation").css("height", "300px");

    $(".logo").text("USER.NAME");
    console.log("This button is working");
  }
  );
 
 
  $(".navigation").css("background-color", "red");
  $(".about-me").css("background-color", "blue");
  */
     /*   
  //Arguments
  colorChange(".about-me", "lightblue");
  colorChange(".navigation", "yellow");
  

                      //Parameters
  function colorChange(myElement, myColor) {
    
  
    
    $(myElement).css("background-color", myColor);
  }
     */   
  /*
    //global variable
  var myLanguage = "Python";
  function colorChange() {

    //local variable existing only in the function
    var myLanguage = "Javascript";

    console.log("This is a tutorial on " + myLanguage);
  }

  colorChange();

  console.log("This is a tutorial on " + myLanguage);
  */

  /*
  var skills = [];
  skills[0] = "Java";
  skills[1] = "NodeJS";
console.log(skills[0]);   
  */
   
   if (firstName == "Obaeko") {
      $(".col-left img").attr( "src", "Pics/selfie2.jpg");
      $("header").css("background-image", "url(Pics/training.jpg)");
      
  } else {
    firstName = "Muyiwa";
    lastName = "Adeniyi";
    $(".col-left img").attr( "src", "Pics/muyi.jpg");
    $("header").css("background-image", "url(Pics/museum.jpg)");
  }

    //Normal Javascript 
     /*
  document.getElementById("greeting").innerHTML = "Hey, " + firstName + " " + lastName + " is here for some intro";
  document.getElementById("job-role").innerHTML = "Junior Web Developer";
  document.getElementsByClassName("logo")[0].innerHTML = firstName + "."  + lastName;
  document.getElementById("my-name").innerHTML = firstName + " " + lastName;
  document.getElementsByClassName("logo")[0].style.color = myColor; 
   document.getElementById("job-role").style.color = myColor;
   document.getElementById("greeting").style.color = "Yellow";
   document.getElementById("greeting") .style.fontS ize = "30px "
   */
   
   //JQuery
 
$("#greeting").text(firstName + " " + lastName + " wants to meet you");
$(".logo").text(firstName + "." + lastName);
$("#job-role").text( "Junior Developer" );
$("#my-name").text(firstName + " " + lastName);
$("#greeting").css("color", "#00bfff");
$("#greeting").css("fontSize", "32 px");

  console.log(firstName + lastName);