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
 * A Connect 4 grid is a 7×6 grid containing Connect 4 discs.
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

Connect4.empty_space = 0;
Connect4.yellow_disc = 1;
Connect4.red_disc = 2;

Connect4.slot_A = 0;
Connect4.slot_B = 1;
Connect4.slot_C = 2;
Connect4.slot_D = 3;
Connect4.slot_E = 4;
Connect4.slot_F = 5;
Connect4.slot_G = 6;

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
    return R.repeat(R.repeat(Connect4.empty_space, 6), 7);
};

const drop_into_column = function (disc, column) {
    const bottom_discs = R.filter(
        (disc) => disc !== Connect4.empty_space,
        column
    );
    const empty_spaces_count = column.length - bottom_discs.length - 1;
    const top_empty_spaces = R.repeat(Connect4.empty_space, empty_spaces_count);
    return [...bottom_discs, disc, ...top_empty_spaces];
};

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
    const drop_column = grid[slot];
    const new_column = drop_into_column(disc, drop_column);

    // const new_grid = R.clone(grid);
    // new_grid[slot] = new_column;

    return grid.with(slot, new_column);
};

/**
 * @returns {Connect4.Player}
 */
Connect4.player_to_drop = function (grid) {
    const discs_in_grid = R.pipe(
        R.flatten,
        R.reject(R.equals(Connect4.empty_space)),
        R.length
    )(grid);

    if (discs_in_grid % 2 === 0) {
        return Connect4.yellow_disc;
    }
    if (discs_in_grid % 2 === 1) {
        return Connect4.red_disc;
    }
};

// const is_column_full = R.none((space) => space === Connect4.empty_space);
const is_column_full = R.none(R.equals(Connect4.empty_space));


const is_grid_full = R.all(is_column_full);

/**
 * @returns {boolean}
 */
Connect4.is_game_ended = function (grid) {
    return Connect4.is_game_won(grid) || is_grid_full(grid);
};

/**
 * @returns {boolean}
 */
Connect4.is_game_won = function (grid) {
    return (
        Connect4.is_game_won_for_player(1, grid) ||
        Connect4.is_game_won_for_player(2, grid)
    );
};

/**
 * Curried function that first takes a player and then takes a column.
 * @sig player -> column -> boolean
 * @private
 */
const is_column_won_vertically_for_player = function (player) {
    return R.pipe(
        R.groupWith(R.equals),
        R.filter((group) => group.length >= 4),
        R.any((group) => group[0] === player)
    );
};

// const is_game_won_vertically_for_player = function (player) {
//     return R.any(is_column_won_vertically_for_player(player));
// };

/**
 * Curried function that first takes a player and then takes a grid.
 * @sig player -> grid -> boolean
 * @private
 */
const is_game_won_vertically_for_player = R.compose(
    R.any,
    is_column_won_vertically_for_player
);

const is_game_won_horizontally_for_player = function (player) {
    return function (grid) {
        return is_game_won_vertically_for_player(player)(R.transpose(grid));
    };
};

const pad_grid = R.zipWith(
    R.concat,
    R.range(0, 7).map((x) => 6 - x).map(R.repeat(0))
);

const is_game_won_positive_diagonally_for_player = function (player) {
    return function (grid) {
        return is_game_won_horizontally_for_player(player)(pad_grid(grid));
    };
};

const is_game_won_negative_diagonally_for_player = function (player) {
    return function (grid) {
        return is_game_won_positive_diagonally_for_player(
            player
        )(R.reverse(grid));
    };
};

/**
 * @returns {function}
 */
Connect4.is_game_won_for_player = function (player) {
    return function (grid) {
        return (
            is_game_won_vertically_for_player(player)(grid) ||
            is_game_won_horizontally_for_player(player)(grid) ||
            is_game_won_positive_diagonally_for_player(player)(grid) ||
            is_game_won_negative_diagonally_for_player(player)(grid)
        );
    };
};

Connect4.space_at = function (row_index, col_index, grid) {
    return R.reverse(R.transpose(grid))[row_index][col_index];
};

debugger;

export default Object.freeze(Connect4);