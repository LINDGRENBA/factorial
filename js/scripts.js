// function to do business logic
let factorial = function(initialNumber, multiplyByN) {
  if (initialNumber > 0) {
    return true;
  } else if (initialNumber === 0) {
  return 1;
  } else {
  return false;
  }
}


// jQuery user interface logic
$(document).ready(function() {
  $(".factorial").submit(function(event) {
    event.preventDefault();

    let initialNumber = parseInt($("input#number-input").val());
    let multiplyByN = parseInt($("input#number-input").val());
    let result = factorial(initialNumber, multiplyByN);
    $(".final-number").text(result);

  });
});