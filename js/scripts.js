// function to do business logic
let factorial = function(initialNumber, multiplyByN) {
  return false;
}


// jQuery user interface logic
$(document).ready(function() {
  $(".factorial").submit(function(event) {
    event.preventDefault();

    let initialNumber = $("input#number-input").val();
    let multiplyByN = $("input#number-input").val();
    let result = factorial(initialNumber, multiplyByN);
    $(".final-number").text(result);

  });
});