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



const create_cell_in_row = function (row_index, tr) {
    return function (column_index) {
        const td = document.createElement("td");

        td.tabIndex = 0;

        td.onclick = function () {
            game_state = LightsOut.ply(column_index, row_index, game_state);
            update_display();
        };

        td.onkeydown = function (event) {
            console.log(event.key);
            if (event.key === "Enter" || event.key === " ") {
                td.onclick();
                return;
            }
            if (event.key === "ArrowRight") {
                table_cells[row_index][
                    (column_index + 1) % game_columns
                ].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowLeft") {
                table_cells[row_index][
                    (column_index + game_columns - 1) % game_columns
                ].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowUp") {
                table_cells[
                    (row_index + game_rows - 1) % game_rows
                ][column_index].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowDown") {
                table_cells[
                    (row_index + 1) % game_rows
                ][column_index].focus();
                event.stopPropagation();
                return;
            }
        };

        tr.append(td);

        return td;
    };
};

const create_row_in_table = function (row_index) {
    const tr = document.createElement("tr");
    game_board.append(tr);

    return R.range(0, game_columns).map(create_cell_in_row(row_index, tr));
};


const table_cells = R.range(0, game_rows).map(create_row_in_table);

document.body.onkeydown = function (event) {
    if (
        event.key === "ArrowUp"
        || event.key === "ArrowDown"
        || event.key === "ArrowLeft"
        || event.key === "ArrowRight"
    ) {
        table_cells[0][0].focus();
    }
}

update_display();
