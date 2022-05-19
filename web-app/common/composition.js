import R from "./ramda.js";

const words = [
    "hello",
    "it's",
    "me",
    "I've",
    "been",
    "wondering",
    "if",
    "after",
    "all",
    "these",
    "years",
    "you'd",
    "like",
    "to",
    "meet"
];

/*
This first function converts a list of words of a song to a single string.
Its implementation is difficult to read, and is specific to the value of
the `words` variable.
*/
const lyrics_1 = R.trim(words.map(function (word) {
    return `${word} `;
}).reduce(function (a, x) {
    return a + x;
}));
console.log(lyrics_1);

/*
We can help a little by pulling out the inline functions into their own named
functions, add_space and string_concat.
*/
const add_space = function (word) {
    return `${word} `;
};

const string_concat = function (a, x) {
    return a + x;
};

/*
This looks more readable, but there's a lot of noise,
and the order of operations,
1) map add_space,
2) reduce string_concat,
3) trim
is presented as 3) trim, 1) map add_space 2) reduce string concat.
So it's harder work to scan.
*/
const lyrics_2 = R.trim(words.map(add_space).reduce(string_concat));
console.log(lyrics_2);

/*
If we use the Ramda curried versions of map and reduce, we can make this
a little better.
The order now is 3) 2) 1), which is better.
But the functions are nested which is less nice to read.
*/
const map_add_space = R.map(add_space);
const reduce_concat = R.reduce(string_concat, "");
const lyrics_3 = R.trim(reduce_concat(map_add_space(words)));
console.log(lyrics_3);

/*
The `compose` function allows us to remove the nesting
to have a set of functions that read right-to-left
and return a new function which is the combined operation.
*/
const words_to_lyrics = R.compose(R.trim, reduce_concat, map_add_space);
const lyrics_4 = words_to_lyrics(words);
console.log(lyrics_4);

/*
I prefer `pipe` to `compose`, since the operations are read sequentially,
here the value of one function is "piped" to the next one.
This form is clear to read. We get a new function `words_to_lyrics_2`,
Which is the combined operation of
1) adding spaces to every item in a list
2) reducing that list down to a single string
3) removing the last space from the string.
*/
const words_to_lyrics_2 = R.pipe(
    map_add_space,
    reduce_concat,
    R.trim
);
const lyrics_5 = words_to_lyrics_2(words);
console.log(lyrics_5);

/*
As an alternative to the version above,
I've inlined the map and reduce.
Which once you are used to how these work,
may be more expressive about how the whole function works.
*/
const words_to_lyrics_3 = R.pipe(
    R.map(add_space),
    R.reduce(string_concat, ""),
    R.trim
);
const lyrics_6 = words_to_lyrics_3(words);
console.log(lyrics_6);

/*
Compare this with the original version at the top of the file to see how
this style of coding can aid understandability of code.
*/
