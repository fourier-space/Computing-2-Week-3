import R from "./ramda.js";
/**
 * This is a module for playing connect 4
 * @namespace LightsOut
 */
const LightsOut = {};


/**
 * Give text on  all of these.
 * @typedef {LightsOut.Button[][]} Board
 * @memberof LightsOut
 */

/**
 * @typedef {boolean} Button
 * @memberof LightsOut
 */

/**
 * @memberof LightsOut
 * @returns {LightsOut.Board} An 5×5 fully lit grid.
 */
const empty_board = function (width = 5, height = 5) {
    return R.repeat(R.repeat(true, width), height);
};

LightsOut.starting_state = function () {
    return {
        "board": empty_board(),
        "moves": 0,
        "level": 25,
        "par": 18
    };
};

const needsFlipping = (row_pressed, column_pressed, row_grid, column_grid) => (
    (row_grid === row_pressed && column_grid === column_pressed)
    || (row_grid === row_pressed + 1 && column_grid === column_pressed)
    || (row_grid === row_pressed - 1 && column_grid === column_pressed)
    || (row_grid === row_pressed && column_grid === column_pressed + 1)
    || (row_grid === row_pressed && column_grid === column_pressed - 1)
);

const ply_on_board = function (column_pressed, row_pressed, board) {
    return board.map((row, row_grid) => row.map((cell, column_grid) => (
        needsFlipping(row_pressed, column_pressed, row_grid, column_grid)
        ? !cell
        : cell
    )));
};


/**
 * @param {LightsOut.Player} player The player making a ply
 * @param {number} column Column index to ply in
 * @param {LightsOut.State} board
 * @returns {LightsOut.State} The new board with a move placed
 *     in the specified column
 */
LightsOut.ply = function (column_pressed, row_pressed, state) {
    return {
        "board": ply_on_board(column_pressed, row_pressed, state.board),
        "moves": state.moves + 1,
        "level": state.level,
        "par": state.par
    };
};


export default Object.freeze(LightsOut);
