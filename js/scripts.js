$(document).ready(function() {

  $("button#hello").click(function() {
    // $("ul#user").prepend("<li>Bark!</li>");
    $("p#webpage").prepend("<p>Meow! <img src=img/cat.jpg></p>");

    $("p#user").children("p").first().click(function(){
      $(this).remove();
    });

    $("p#webpage").children("p").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("p#user").prepend("<p>Bark!<img src=img/dog.jpg></p>");
    // $("ul#webpage").prepend("<li>Bark!!</li>");

    $("p#user").children("p").first().click(function(){
      $(this).remove();
    });

    $("p#webpage").children("p").first().click(function(){
      $(this).remove();
    });

  });



  // $("li").css("background-color", "green");
});
