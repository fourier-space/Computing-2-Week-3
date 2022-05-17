# Computing 2 – Week 3

## Setup
As normal make sure to install your external dependancies
```bash
npm install
npm install --prefix web-app/common
```

## Wednesday
In this repo, I've initally uploaded a shell of `Connect4.js`,
which is the API as it appears in Zombie Siege but without any implementation.
I've also included an empty `Game_module.js` if you wanted to use this to test
your jsdoc.

### Recursion ###
One of the strategies we used was *recursion*, where a function calls itself.
This works by defining a base case that the function can return an answer for,
and then saying the general case can be provided in terms of a more simple case,
such that eventually we reduce to the base case.

In the Q&A the example we used was the `factorial` function.
The base case here was `factorial(0) = 1`,
and the general case is `factorial(n) = n * factorial(n - 1)`.

**Re-implement this yourself and check the results agree with what you expect.**

Another function that can be used to demonstrate recursion is the
[Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number).

i.e. `0  1  1  2  3  5  8  13  21  …`

Which have the property that the next number in the sequence is
the sum of the previous two.

I.e. `fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)`
with base cases `fibonacci(0) = 0`, `fibonacci(1) = 1`.

**Implement this yourself and see if you can match the correct answers.**

A related sequence is the
[Lucas numbers](https://en.wikipedia.org/wiki/Lucas_number).
These have the same recursion rule, but the base cases are different.
Here `lucas(0) = 2`, and `lucas(1) = 1`.

**Implement these, you should find `lucas(10) = 123`.**

There are a number of such Fibonacci-like sequences,
including the *[Brady Numbers](https://www.youtube.com/watch?v=D8ntDpBm6Ok)*
which were explored on Numberphile.
These have a base case of `b(0) = 2308` and `b(1) = 4261`.

**Write a function that takes the values of the base cases and returns a Fibonacci-like function.**
i.e `b = fibonacci-like(2308, 4261)` returns a function that gives Brady numbers.
Check that `b(10) = 312827`, and `fibonacci-like(2308, 4261)(8) = 119485`.

You should also have that `fibonacci-like(0, 1)`
will return a function equivalent to `fibonacci` and
`fibonacci-like(2, 1)`
will return a function equivalent to `lucas`.

#### Stretch Goal ####
Depending on how you implemented `fibonacci`, it's performance might not be great.
Try caluclating `fibonacci(40)` and see how long it takes.

A more efficient way to implement it is using *tail-recursion*.
If you want to look further, watch
[this computerphile video](https://www.youtube.com/watch?v=_JtPhF8MshA)
and try to implement both `factorial` and `fibonacci` using tail recursion.
