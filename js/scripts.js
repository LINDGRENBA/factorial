// function to do business logic
let factorial = function(initialNumber, multiplyByN) {
  if (initialNumber > 0) {
    // if initialNumber is greater than zero, run the loop
    for (let index = 1; multiplyByN > 1; index += 1) {
      multiplyByN -= 1;
      let number = initialNumber * multiplyByN;
      initialNumber = number;
    }
    // and THEN return the result of the loop
    return initialNumber;
    // need to have return outside of for loop or it will stop the loop
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
    $(".number-input").text(result);

    // $(".number-input").text(initialNumber);

    // if (!result) {
    //   $(".final-number").text("N/A");
    // } else {
    //   (".final-number").text(result);
    // }



  });
});