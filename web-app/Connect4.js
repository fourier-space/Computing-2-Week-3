import R from "./ramda.js";
/**
 * Connect4.js is a module to model and play "Connect Four" and related games.
 * https://en.wikipedia.org/wiki/Connect_Four
 * @namespace Connect4
 * @author A. Freddie Page
 * @version 2021/22
 */
const Connect4 = Object.create(null);

/**
 * Create a new empty board.
 * Optionally with a specified width and height,
 * otherwise returns a standard 7 wide, 6 high board.
 * @memberof Connect4
 * @function
 * @param {number} [width = 7] The width of the new board.
 * @param {number} [height = 6] The height of the new board.
 * @returns {Connect4.Board} An empty board for starting a game.
 */
Connect4.empty_board = function () {
};

export default Object.freeze(Connect4);