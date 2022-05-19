// const add = function (x, y) {
//     return x + y;
// };

const add = (x, y) => x + y;

// const add_curried = function (x) {
//     return function (y) {
//         return x + y;
//     };
// };

const add_curried = (x) => (y) => x + y;

console.log(add(4, 6)); //> 10
console.log(add_curried(4)(6)); //> 10
const add_four = add_curried(4);
console.log(add_four(6)); //> 10
console.log(add_four(7)); //> 11
console.log(add_four(-4)); //> 0
const increment = add_curried(1);
console.log(increment(99)); //> 100
