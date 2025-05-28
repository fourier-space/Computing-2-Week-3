const LightsOut = {};

const cell_to_flip = function (row_offset, col_offset) {
    return (
        row_offset === 0 &&
        col_offset === 0
    ) || (
        row_offset === 1 &&
        col_offset === 0
    ) || (
        row_offset === -1 &&
        col_offset === 0
    ) || (
        row_offset === 0 &&
        col_offset === 1
    ) || (
        row_offset === 0 &&
        col_offset === -1
    );
};

LightsOut.press = function (clicked_row_index, clicked_col_index, board) {
    return board.map(function (row, row_index) {
        return row.map(function (value, col_index) {
            const row_offset = row_index - clicked_row_index;
            const col_offset = col_index - clicked_col_index;
            // The !== operator behaves as XOR.
            return cell_to_flip(row_offset, col_offset) !== value;
        });
    });
};

export default Object.freeze(LightsOut);