import R from "./ramda.js";

/**
 * @namespace Connect4
 */
const Connect4 = {};

/**
 * A slot on the grid a disc can be placed into.
 * @memberof Connect4
 * @typedef {number} Slot
 */

/**
 * @memberof Connect4
 * @typedef Grid
 */

const column_count = 7;
const row_count = 6;

const empty_space = 0;
const disc_player_1 = 1;
const disc_player_2 = 2;


const empty_column = R.repeat(empty_space, row_count);

Connect4.empty_grid = function () {
    return R.repeat(empty_column, column_count);
};

const drop_into_column = function (disc, column) {
    const not_equals = R.complement(R.equals);
    const bottom_of_column = column.filter(not_equals(empty_space));
    const column_with_dropped_disc = R.append(disc, bottom_of_column);
    const filled_spaces = column_with_dropped_disc.length;
    const empty_spaces = row_count - filled_spaces;
    return R.concat(
        column_with_dropped_disc,
        R.repeat(empty_space, empty_spaces)
    );
};

const column_is_full = function (column) {
    const empty_spaces = column.filter(R.equals(empty_space)).length;
    return empty_spaces === 0;
};

/**
 * Drop a coloured disc into a Connect 4 Grid.
 * @memberof Connect4
 * @param {Connect4.Slot} slot The slot we are placing a disc into.
 * @param {Connect4.Grid} grid The grid we placing into
 * @returns {Connect4.Grid | undefined} The resultant grid after the disc is
 *  dropped.
 */
Connect4.drop_disc = function (slot, grid) {
    if (Connect4.is_ended(grid)) {
        return undefined;
    }

    const initial_column = grid[slot];
    if (column_is_full(initial_column)) {
        return undefined;
    }

    const disc = Connect4.next_player(grid);
    const final_column = drop_into_column(disc, initial_column);
    return grid.with(slot, final_column);
};

Connect4.is_ended = function () {
    return false;
};

Connect4.is_slot_free = function () {

};

const count_disc_of_player = function (disc, grid) {
    return grid.flat().filter(R.equals(disc)).length;
};

Connect4.next_player = function (grid) {
    const player_1_discs = count_disc_of_player(disc_player_1, grid);
    const player_2_discs = count_disc_of_player(disc_player_2, grid);
    return (
        player_1_discs > player_2_discs
        ? disc_player_2
        : disc_player_1
    );
};

Connect4.is_victory = function () {

};

const to_string_representations = ["🟦", "🟡", "🔴"];

const to_string_disc_or_empty = function (disc_or_empty) {
    return to_string_representations[disc_or_empty];
};

Connect4.to_string = function (grid) {
    const grid_discs_to_string = R.map(R.map(to_string_disc_or_empty));

    return R.pipe(
        grid_discs_to_string,
        R.transpose,
        R.reverse,
        R.map(R.join("")),
        R.join("\n")
    )(grid);
};

export default Object.freeze(Connect4);