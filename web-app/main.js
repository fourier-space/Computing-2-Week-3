import R from "./ramda.js";
import LightsOut from "./LightsOut.js";

const game_rows = 5;
const game_columns = 5;

let game_state = LightsOut.starting_state();

const update_display = function () {

    document.getElementById("moves").textContent = game_state.moves;
    document.getElementById("level").textContent = game_state.level;
    document.getElementById("par").textContent = game_state.par;

    game_state.board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_cell = table_cells[row_index][column_index];
            table_cell.className = (
                cell
                ? "lit"
                : "unlit"
            );
        });
    });
};

////////////

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_board = document.getElementById("game_board");

const table_cells = R.range(0, game_rows).map(function (row_index) {
    const tr = document.createElement("tr");
    game_board.append(tr);

    return R.range(0, game_columns).map(function (column_index) {
        const td = document.createElement("td");
        // td.textContent = `${column_index},${row_index}`;

        td.onclick = function () {
            // console.log(`${column_index},${row_index}`);
            game_state = LightsOut.ply(column_index, row_index, game_state);
            update_display();
        };

        tr.append(td);

        return td;
    });

});

update_display();
