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

Connect4.empty_grid = function () {

};

/**
 * Drop a coloured disc into a Connect 4 Grid.
 * @memberof Connect4
 * @param {Connect4.Slot} slot The slot we are placing a disc into.
 * @param {Connect4.Grid} grid The grid we placing into
 * @returns {Connect4.Grid} The resultant grid after the disc is dropped.
 */
Connect4.drop_disc = function (slot, grid) {

};

Connect4.is_slot_free = function () {

};

Connect4.next_player = function () {

};

Connect4.is_victory = function () {

};

export default Object.freeze(Connect4);