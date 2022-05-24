import R from "./ramda.js";
const Hanoi = Object.create(null);

const list_merge = (a) => (b) => Object.assign([], a, b);

const print_ring = function (r) {
    const start = R.repeat(r, 5 - r);
    const end = R.repeat(" ", r);
    return R.join("", R.concat(start, end));
};


const print_tower = R.pipe(
    R.map(print_ring),
    list_merge(R.repeat("     ", 5)),
    R.reverse,
    R.append("=====")
);

Hanoi.print = R.pipe(
    R.map(print_tower),
    R.reduce(R.zipWith((a, b) => `${a}  ${b}`), R.repeat("", 6)),
    R.join("\n")
);

const towers = [
    [0, 1, 2, 3, 4],
    [],
    []
];

Hanoi.move = function (from, to) {
    const other = 3 - from - to;
    if (from === to) {
        return R.identity;
    }
    return function (towers) {
        const ring = R.last(towers[from]);
        const from_tower = R.dropLast(1, towers[from]);
        const to_tower = R.append(ring, towers[to]);
        const result_tower = [];
        result_tower[from] = from_tower;
        result_tower[to] = to_tower;
        result_tower[other] = towers[other];
        return result_tower;
    };
};

Hanoi.instructions = function (quantity, from, to) {
    if (from === to) {
        return [];
    }
    if (quantity === 0) {
        return [];
    }
    if (quantity === 1) {
        return [[from, to]];
    }
    const other = 3 - from - to;
    return [
        ...Hanoi.instructions(quantity - 1, from, other),
        [from, to],
        ...Hanoi.instructions(quantity - 1, other, to)
    ];
};

Hanoi.instructions_adjacent = function (quantity, from, to) {
    if (from === to) {
        return [];
    }
    if (quantity === 0) {
        return [];
    }
    if (to - from > 1) {
        return [
            ...Hanoi.instructions_adjacent(quantity, from, from + 1),
            ...Hanoi.instructions_adjacent(quantity, from + 1, to)
        ];
    }
    if (to - from < -1) {
        return [
            ...Hanoi.instructions_adjacent(quantity, from, from - 1),
            ...Hanoi.instructions_adjacent(quantity, from - 1, to)
        ];
    }
    if (quantity === 1) {
        return [[from, to]];
    }
    const other = 3 - from - to;
    return [
        ...Hanoi.instructions_adjacent(quantity - 1, from, other),
        [from, to],
        ...Hanoi.instructions_adjacent(quantity - 1, other, to)
    ];
};

const moves = R.map(R.apply(Hanoi.move), Hanoi.instructions(5, 0, 2));
const towers_sequence = R.scan(R.applyTo, towers, moves);

R.map((ts) => console.log(Hanoi.print(ts), "\n"), towers_sequence);

export default Object.freeze(Hanoi);
