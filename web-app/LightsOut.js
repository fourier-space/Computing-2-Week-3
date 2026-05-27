const LightsOut = {};

LightsOut.new_level = function () {
    return [
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true]
    ];
};

LightsOut.flip = function (flip_row_index, flip_column_index, state) {
    return state.map(function (row, state_row_index) {
        return row.map(function (cell, state_column_index) {
            if (
                state_row_index === flip_row_index &&
                state_column_index === flip_column_index
            ) {
                return !cell;
            }

            if (
                state_row_index === flip_row_index + 1 &&
                state_column_index === flip_column_index
            ) {
                return !cell;
            }

            if (
                state_row_index === flip_row_index - 1 &&
                state_column_index === flip_column_index
            ) {
                return !cell;
            }

            if (
                state_row_index === flip_row_index &&
                state_column_index === flip_column_index + 1
            ) {
                return !cell;
            }

            if (
                state_row_index === flip_row_index &&
                state_column_index === flip_column_index - 1
            ) {
                return !cell;
            }

            return cell;
        });
    })
};

export default Object.freeze(LightsOut);