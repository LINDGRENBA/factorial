$(document).ready(function() {
  $(".factorial").submit(function(event) {
    event.preventDefault();

    let initialNumber = $("input#number-input").val();
    let multiplyByN = $("input#number-input").val();
    let result = factorial(initialNumber, multiplyByN);
    $(".result").text(result);

  });
});