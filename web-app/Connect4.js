import R from "./ramda.js";
/**
 * Connect4.js is a module to model and play "Connect Four" and related games.
 * https://en.wikipedia.org/wiki/Connect_Four
 * @namespace Connect4
 * @author A. Freddie Page
 * @version 2024/25
 */
const Connect4 = Object.create(null);

/**
 * A Connect 4 grid is a 7×6 grid containing Connect 4 tokens.
 * @memberof Connect4
 * @typedef {Connect4.Column[]} Grid
 */

/**
 * @memberof Connect4
 * @typedef {Connect4.Space[]} Column
 */

/**
 * @memberof Connect4
 * @typedef {0 | Connect4.Disc} Space
 */

/**
 * @memberof Connect4
 * @typedef {1 | 2} Disc
 */

/**
 * Create a new empty grid.
 * Optionally with a specified width and height,
 * otherwise returns a standard 7 wide, 6 high grid.
 * @memberof Connect4
 * @function
 * @param {number} [width = 7] The width of the new grid.
 * @param {number} [height = 6] The height of the new grid.
 * @returns {Connect4.Grid} An empty grid for starting a game.
 */
Connect4.empty_grid = function () {
};

Connect4.yellow_disc = 1;
Connect4.red_disc = 1;

/**
 * Drop will let a player drop a disc in to a slot in a Connect 4 Grid.
 * @memberof Connect4
 * @param {Connect4.Slot} slot Which slot, or column, to drop the disc.
 * @param {Connect4.Disc} disc What type of disc is being dropped.
 * @param {Connect4.Grid} grid Initial state of grid to drop a disc into.
 * @returns {Connect4.Grid} Final state of a new grid with the disc
 * dropped into it.
 */
Connect4.drop = function (slot, disc, grid) {
};

/**
 * @returns {Connect4.Player}
 */
Connect4.player_to_ply = function (grid) {
};

/**
 * @returns {boolean}
 */
Connect4.is_game_ended = function (grid){
};

/**
 * @returns {boolean}
 */
Connect4.is_game_won = function (grid){
};

/**
 * @returns {function}
 */
Connect4.is_game_won_for_player = function (player) {
    return function (grid) {
    };
};


export default Object.freeze(Connect4);