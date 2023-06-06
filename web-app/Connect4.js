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
 * A Board is an rectangular grid that tokens can be placed into one at a time.
 * Tokens fill up empty positions from the bottom of a column upwards.
 * It is implemented as an array of columns (rather than rows) of tokens
 * (or empty positions)
 * @memberof Connect4
 * @typedef {Connect4.Token_or_empty[][]} Board
 */

/**
 * A token is a coloured disk that players place in the grid.
 * @memberof Connect4
 * @typedef {(1 | 2)} Token
 */

/**
 * Either a token or an empty position.
 * @memberof Connect4
 * @typedef {(Connect4.Token | 0)} Token_or_empty
 */

/**
 * A set of template token strings for {@link Connect4.to_string_with_tokens}.
 * @memberof Connect4
 * @enum {string[]}
 * @property {string[]} default ["0", "1", "2"] Displays tokens by their index.
 * @property {string[]} disks ["⚫", "🔴", "🟡"]
 * Displays tokens as coloured disks.
 * @property {string[]} zombies ["🟫", "🚧", "🧟"]
 * Displays tokens as zombies and barricades.
 */
Connect4.token_strings = Object.freeze({
    "default": ["0", "1", "2"],
    "disks": ["⚫", "🔴", "🟡"],
    "zombies": ["🟫", "🚧", "🧟"]
});

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
Connect4.empty_board = function (width = 7, height = 6) {
};

/**
 * Returns an array of which column numbers are free to place a token in.
 * @memberof Connect4
 * @function
 * @param {Connect4.Board} board The board to check for free columns.
 * @returns {number[]} An array of column indices of free columns.
 */
Connect4.free_columns = R.pipe(
);

/**
 * Returns if a game has ended,
 * either because a player has won or the board is full.
 * @memberof Connect4
 * @function
 * @param {Connect4.Board} board The board to test.
 * @returns {boolean} Whether the game has ended.
 */
Connect4.is_game_ended = function (board) {
};

/**
 * Returns if the board is in a winning state for any player.
 * A board is won for a player if that player has four tokens in a row,
 * either horizontally, vertically, or diagonally, at any position on the board.
 * @memberof Connect4
 * @function
 * @param {(1 | 2)} player Which player to check has a win.
 * @param {Connect4.Board} board The board to check.
 * @returns {boolean} Returns if the board is in a winning state
 * for the specified player.
 */
Connect4.is_winning_for_player = function (player, board) {

};

/**
 * Returns which player is the next to make a ply for a board.
 * @memberof Connect4
 * @function
 * @param {Connect4.Board} board The board to check.
 * @returns {(1 | 2)} The player next to play.
 */
Connect4.player_to_ply = function (board) {

};

const column_is_full = function (column_index, board) {

};

const place_token_in_column = function (token, column) {

};

/**
 * A ply is one turn taken by one of the players.
 * Return a new board after a player places a token in a specified column.
 * @memberof Connect4
 * @function
 * @param {Connect4.Token} token The token to be added to the board.
 * @param {number} column_index The column the player adds the token to
 * @param {Connect4.Board} board The board state that the ply is made on.
 * @returns {(Connect4.Board | undefined)} If the ply was legal,
 *   return the new board, otherwise return `undefined`.
 */
Connect4.ply = function (token, column_index, board) {
    if (Connect4.is_game_ended(board)) {
        return undefined;
    }
    if (column_is_full(column_index, board)) {
        return undefined;
    }
    if (Connect4.player_to_ply(board) !== token) {
        return undefined;
    }
    const column  = board[column_index];
    const updated_column = place_token_in_column(token, column);
    const new_board = [...board];
    new_board[column_index] = updated_column;
    return new_board;
};

/**
 * Returns the size of a board as an array of [width, height].
 * @memberof Connect4
 * @function
 * @param {Connect4.Board} board The board to check the size of.
 * @returns {number[]} The width and height of the board, [width, height].
 */
Connect4.size = function (board) {
};


/**
 * Returns a {@link Connect4.to_string} like function,
 * mapping tokens to provided string representations.
 * @memberof Connect4
 * @function
 * @param {string[]} token_strings
 * Strings to represent tokens as. Examples are given in
 * {@link Connect4.token_strings}
 * @returns {function} The string representation.
 */
Connect4.to_string_with_tokens = (token_strings) => (board) => R.pipe(
    R.transpose, // Columns to display vertically.
    R.reverse, // Empty slots at the top.
    replace_tokens_on_board(token_strings),
    R.map(R.join(" ")), // Add a space between each slot.
    R.join("\n") // Stack rows atop each other.
)(board);

/**
 * Returns a string representation of a board.
 * I.e. for printing to the console rather than serialisation.
 * @memberof Connect4
 * @function
 * @param {Connect4.Board} board The board to represent.
 * @returns {string} The string representation.
 */
Connect4.to_string = Connect4.to_string_with_tokens(["0", "1", "2"]);

/**
 * For a board that is won,
 * returns the coordinates (col, row) of slots contributing to the win.
 * Will return more than four coordinates if there is a win along multiple axes,
 * or a longer streak than four in a row.
 * Returns the empty array if the board is not won.
 * @memberof Connect4
 * @function
 * @param {Connect4.board} board The board to analyse.
 * @returns {number[][]} An array of coordinates.
 */
Connect4.winning_slots = function (board) {

};

// const print = function (board) {
//     console.log(Connect4.to_string_with_tokens(
//         Connect4.token_strings.zombies
//     )(board));
//     return board;
// };
// debugger;

export default Object.freeze(Connect4);
