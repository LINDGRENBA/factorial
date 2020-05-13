// let n = 5;

// for (let i = n; i > 0; i -= 1) {
//   a = n*(i-1); // 120
//   console.log(a);
// }

// for (let i = n; i > 0; i -= 1) {
//   let multiplyBy = n;
//   multiplyBy -= 1;
//   n = n*multiplyBy;
//   console.log(n);
// }

let factorial = function(a, b) {
  for(i = a; i > 0; i -= 1) {
    b = b - 1;
    let result = a * b;
  }
}

factorial(5, 5);
$(".result").text(result);