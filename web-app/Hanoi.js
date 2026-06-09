const Hanoi = {};

Hanoi.starting_position = function () {
    return [
        [0, 1, 2, 3, 4],
        [],
        []
    ];
};

Hanoi.move_ring = function (from_peg_index, to_peg_index, position) {

    const from_peg = position[from_peg_index];
    if (from_peg.length === 0) {
        return undefined;
    }

    const to_peg = position[to_peg_index];
    const [ring, ...remaining_peg] = from_peg;
    if (to_peg.length !== 0 && ring > to_peg[0]) {
        return undefined;
    }

    const other_peg_index = 0 + 1 + 2 - from_peg_index - to_peg_index;
    const other_peg = position[other_peg_index];

    const next_position = [];

    next_position[from_peg_index] = remaining_peg;
    next_position[to_peg_index] = [ring, ...to_peg];
    next_position[other_peg_index] = other_peg;

    console.log(JSON.stringify(next_position));
    return next_position;
};

Hanoi.move_stack = function (size, from_peg_index, to_peg_index, position) {
    if (size === 1) {
        return Hanoi.move_ring(from_peg_index, to_peg_index, position);
    }

    const other_peg_index = 0 + 1 + 2 - from_peg_index - to_peg_index;
    const first_intermediate = Hanoi.move_stack(
        size - 1,
        from_peg_index,
        other_peg_index,
        position
    );
    const second_intermediate = Hanoi.move_ring(
        from_peg_index,
        to_peg_index,
        first_intermediate
    );
    const result = Hanoi.move_stack(
        size - 1,
        other_peg_index,
        to_peg_index,
        second_intermediate
    );
    return result;
};

Hanoi.solve = function (position) {
    return Hanoi.move_stack(5, 0, 2, position);
};

export default Object.freeze(Hanoi);