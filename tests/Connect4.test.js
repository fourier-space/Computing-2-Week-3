/*jslint long*/
import R from "../web-app/ramda.js";
import Connect4 from "../web-app/Connect4.js";
import assert from "assert";

describe("When a disc is dropped into a slot with free spaces in a grid that is not ended on the turn of the player whose disc is being dropped", function () {

    let slot;
    let disc;
    let initial;
    let final;

    before(function () {
        slot = Connect4.slot_A;
        disc = Connect4.yellow_disc;
        initial = Connect4.empty_grid();

        final = Connect4.drop(slot, disc, initial);
    });

    it("All other columns remain unchanged", function () {
        const filtered_initial = initial.filter((ignore, slot_index) => slot !== slot_index);
        const filtered_final = final.filter((ignore, slot_index) => slot !== slot_index);

        assert.deepStrictEqual(filtered_initial, filtered_final);
    });

    it("All spaces already filled in the column remain unchanged", function () {
        throw new Error("Test not implemented");
    });

    it("There are no filled spaces above any empty spaces", function () {
        throw new Error("Test not implemented");
    });

    it("The bottom-most empty space will become the disk dropped", function () {
        assert.strictEqual(
            R.last(
                final[slot].filter((space) => space !== Connect4.empty_space)
            ),
            disc
        );
    });

});
