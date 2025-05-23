const LightsOut = {};

LightsOut.press = function (clicked_row_index, clicked_col_index, board) {
    return board.map(function (row, row_index) {
        return row.map(function (value, col_index) {
            if (
                row_index === clicked_row_index &&
                col_index === clicked_col_index
            ) {
                return !value;
            }
            if (
                row_index === clicked_row_index + 1 &&
                col_index === clicked_col_index
            ) {
                return !value;
            }
            if (
                row_index === clicked_row_index - 1 &&
                col_index === clicked_col_index
            ) {
                return !value;
            }
            if (
                row_index === clicked_row_index &&
                col_index === clicked_col_index + 1
            ) {
                return !value;
            }
            if (
                row_index === clicked_row_index &&
                col_index === clicked_col_index - 1
            ) {
                return !value;
            }
            return value;
        });
    });
};

export default Object.freeze(LightsOut);