import Connect4 from "../Connect4.js";
import R from "../ramda.js";

describe("Plies", function () {

    it(`Given a board that is ended;
    When a player makes a ply;
    Then undefined is returned;`, function () {
        throw new Error("unimplemented");
    });

    it(`Given a board that is not ended with a full column;
    When a player makes a ply into that colunm;
    Then undefined is returned;`, function () {
        throw new Error("unimplemented");
    });

    it(`Given a board that is not ended;
    When a player, whose turn it is, makes a ply into a colunm that is not full;
    Then a board is returned with all other columns unchanged;`, function () {
        const initial_board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [2, 1, 2, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0]
        ];
        const player = 1;
        const in_column = 3;

        const final_board = Connect4.ply(player, in_column, initial_board);

        R.range(0, 7).forEach(function (column_index) {
            if (column_index === in_column) {
                return;
            }

            const initial_column = initial_board[column_index];
            const final_column = final_board[column_index];

            if (!R.equals(initial_column, final_column)) {
                debugger;
                throw new Error(
                    `When making a ply in column ${in_column},
                    column ${column_index} changes.
                    from: ${JSON.stringify(initial_column)}
                    to: ${JSON.stringify(final_column)}`
                );
            }
        });

    });

});
