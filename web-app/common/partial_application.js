// const add = function (x, y) {
//     return x + y;
// };

const add = (x, y) => x + y;

[1, 2, 3].reduce(function (a, x) {
     return a + x
});

// const add_curried = function (x) {
//     return function (y) {
//         return x + y;
//     };
// };

// const add_curried = function (x) {
//     return (y) => x + y;
// };

const add_curried = (x) => (y) => x + y;

const increment = add_curried(1);
const add_three = add_curried(3);

console.log(add(3, 6)); //> 9

console.log(add_curried(3)(6)); //> 9

console.log(add_three(6)); //> 9

console.log(increment(10)); //> 11

console.log(add(3)); //> NaN
