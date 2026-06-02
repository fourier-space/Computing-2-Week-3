/*jslint long*/
import R from "../web-app/ramda.js";
import Connect4 from "../web-app/Connect4.js";
import assert from "assert";


describe("On your turn, drop one of your discs into any slot in the top of the grid", function () {

    it("The columns that were not dropped into remain unchanged", function () {
        // GIVEN a grid that is not ended,
        const initial_state = [
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [1, 2, 1, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [1, 2, 0, 0, 0, 0],
            [2, 1, 2, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        const slot = 3;

        // WHEN a disc is dropped into a slot,
        const final_state = Connect4.drop_disc(slot, initial_state);

        // THEN all other columns are unchanged,
        initial_state.forEach(function (column, column_index) {
            if (column_index === slot) {
                return;
            }

            assert(
                R.equals(column, final_state[column_index]),
                (
                    `One of the columns not dropped into, (${column_index}), is different between initial and final states` +
                    "\n\n" +
                    "Initial column: " + JSON.stringify(column) +
                    "\n" +
                    "Final column: " + JSON.stringify(final_state[column_index])
                )
            );
        });

    });

    it("The discs already in the column that was dropped into remain unchanged", function () {
        throw new Error("Unimplemented");
    });

    it("The disc that is dropped belongs to the player whose turn it is", function () {
        throw new Error("Unimplemented");
    });

    it("The number of empty spaces in a column after a drop is reduced by one", function () {
        throw new Error("Unimplemented");
    });

    it("A disc cannot be dropped into a full slot", function () {
        throw new Error("Unimplemented");
    });

});




describe("Top level description", function () {

    describe("Second level description", function () {

        it("Passing Test", function () {

        });

        it("Failing Test", function () {
            const game_grid = document.getElementById("game-grid");
            throw new Error("This test always fails");
        });

    });

});