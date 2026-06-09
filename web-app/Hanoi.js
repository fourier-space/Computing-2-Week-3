const Hanoi = {};

Hanoi.starting_stacks = function () {
    return [
        [0, 1, 2, 3, 4],
        [],
        []
    ];
};

Hanoi.move_ring = function (source_peg, destination_peg, stacks) {

    const source_stack = stacks[source_peg];
    if (source_stack.length === 0) {
        return undefined;
    }

    const destination_stack = stacks[destination_peg];
    const [ring, ...remaining_stack] = source_stack;
    if (destination_stack.length !== 0 && ring > destination_stack[0]) {
        return undefined;
    }

    return stacks.with(
        source_peg,
        remaining_stack
    ).with(
        destination_peg,
        [ring, ...destination_stack]
    );
};

Hanoi.move_stack = function (stack_size, source_peg, destination_peg, stacks) {
    if (stack_size === 1) {
        return Hanoi.move_ring(source_peg, destination_peg, stacks);
    }

    const other_peg = 0 + 1 + 2 - source_peg - destination_peg;
    const first_intermediate = Hanoi.move_stack(
        stack_size - 1,
        source_peg,
        other_peg,
        stacks
    );
    const second_intermediate = Hanoi.move_ring(
        source_peg,
        destination_peg,
        first_intermediate
    );
    return Hanoi.move_stack(
        stack_size - 1,
        other_peg,
        destination_peg,
        second_intermediate
    );
};

Hanoi.solve = function (stacks) {
    return Hanoi.move_stack(5, 0, 2, stacks);
};

export default Object.freeze(Hanoi);