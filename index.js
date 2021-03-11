$("button").click(function() {
  if (validateEmail($("input").val())) {
    $(".error-message").addClass("d-none");
    $("input").removeClass("red-border");
  } else {
    $(".error-message").removeClass("d-none");
    $("input").addClass("red-border");
  }
});

function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
