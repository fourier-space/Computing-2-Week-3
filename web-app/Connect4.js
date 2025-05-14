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
 *
 * @returns {Connect4.Grid}
 */
Connect4.drop = function (disc, slot, grid) {
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