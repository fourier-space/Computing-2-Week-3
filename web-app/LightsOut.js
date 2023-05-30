import R from "./ramda.js";
/**
 * This is a module for playing connect 4
 * @namespace LightsOut
 */
const LightsOut = {};


/**
 * Give text on  all of these.
 * @typedef Board
 * @memberof LightsOut
 */

/**
 * @typedef {1 | 2} Player
 * @memberof LightsOut
 */

/**
 * @memberof LightsOut
 * @returns {LightsOut.Board} An 6×7 empty connect 4 board.
 */
LightsOut.empty_board = function (width = 5, height = 5) {
    return R.range(0, height).map(function () {
        return R.range(0, width).map(() => true);
    });
};

const needsFlipping = function (
        row_index_pressed,
        column_index_pressed,
        row_index_grid,
        column_index_grid
    ) {
    if (row_index_pressed === row_index_grid) {
        if (
            column_index_pressed === column_index_grid ||
            column_index_pressed === column_index_grid + 1 ||
            column_index_pressed === column_index_grid - 1
        ) {
            return true;
        }
    }
    if (column_index_pressed === column_index_grid) {
        if (
            row_index_pressed === row_index_grid + 1 ||
            row_index_pressed === row_index_grid - 1
        ) {
            return true;
        }
    }
    return false;
};

/**
 * @param {LightsOut.Player} player The player making a ply
 * @param {number} column Column index to ply in
 * @param {LightsOut.Board} board
 * @returns {LightsOut.Board} The new board with a move placed
 *     in the specified column
 */
LightsOut.ply = function (column_index_pressed, row_index_pressed, board) {
    return board.map(function (row, row_index_grid) {
        return row.map(function (cell, column_index_grid) {
            if (needsFlipping(
                row_index_pressed,
                column_index_pressed,
                row_index_grid,
                column_index_grid
            )) {
                return !cell;
            }
            return cell;
        })
    });
};

export default Object.freeze(LightsOut);
