
$(document).ready(function () {

  $("#contact-form").submit(function () {

    var is_error = false;
    var error_count = 0;

    var fullname = $("#fullname").val();
    if (fullname == "") {
      $("input#fullname").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }


    var phone = $("#phone").val();
    if (phone == "") {
      $("input#phone").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    var email = $("#email").val();
    if (email == "") {
      $("input#email").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    var description = $("#description").val();
    if (description == "") {
      $("textarea#description").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    if (is_error == true) {
      $("span#error-count").text(error_count);
      $("p#error-list").css("display", "block");
      event.preventDefault();
    }
    else {
      alert("Thank you! The Form is successfully Submitted.");
    }

    $("#fullname").focusout(function () {
      $("input#fullname").css("border-color", "#dddddd");
    });

    $("#phone").focusout(function () {
      $("input#phone").css("border-color", "#dddddd");
    });

    $("#email").focusout(function () {
      $("input#email").css("border-color", "#dddddd");
    });


    $("#description").focusout(function () {
      $("textarea#description").css("border-color", "#dddddd");
    });

  });

  $("#narrow-menu-title").click(function () {
    $(".narrow-menu ul.nav-links").toggle(500);
  });


});



var diver = "diver1";

setInterval(function () {
  var diverimg = document.getElementById("diver-image-id");

  if (diver == "diver1") {
    diverimg.src = "assets/images/home-diver2.jpg"
    diverimg.style.transition = "opacity 10s";
    diverimg.style.opacity = "1";
    diverimg.style.opacity = "0";
    diver = "diver2"
  } else if (diver == "diver2") {
    diverimg.src = "assets/images/home-diver3.jpg"
    diverimg.style.transition = "opacity 10s";
    diverimg.style.opacity = "1";
    diver = "diver3"
  } else {
    diverimg.src = "assets/images/diver1.jpg"
    diverimg.style.transition = "opacity 10s";
    diverimg.style.opacity = "1";
    diver = "diver1"
  }

}, 3000);




