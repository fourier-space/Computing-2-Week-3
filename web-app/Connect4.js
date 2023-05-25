/**
 * This is a module for playing connect 4
 * @namespace Connect4
 */
const Connect4 = {};

/**
 * Give text on  all of these.
 * @typedef Board
 * @memberof Connect4
 */

/**
 * @typedef {1 | 2} Player
 * @memberof Connect4
 */

/**
 * @memberof Connect4
 * @returns {Connect4.Board} An 6×7 empty connect 4 board.
 */
Connect4.empty_board = function () {
};

/**
 * @param {Connect4.Player} player The player making a ply
 * @param {number} column Column index to ply in
 * @param {Connect4.Board} board
 * @returns {Connect4.Board} The new board with a move placed
 *     in the specified column
 */
Connect4.ply = function (player, column, board) {
};

export default Object.freeze(Connect4);
