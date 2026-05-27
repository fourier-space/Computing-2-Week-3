// import Connect4 from "./Connect4.js";
import LightsOut from "./LightsOut.js";
import R from "./ramda.js";

const row_count = 5;
const column_count = 5;

let state = LightsOut.new_level();

document.documentElement.style.setProperty("--row-count", row_count);
document.documentElement.style.setProperty("--column-count", column_count);

const game_grid = document.getElementById("game-grid");

const update_grid = function () {
    state.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            if (cell) {
                td_grid[row_index][column_index].className = "on";
            } else {
                td_grid[row_index][column_index].className = "off";
            }
        });
    });
};

const td_grid = R.range(0, row_count).map(function (row_index) {
    const tr = document.createElement("tr");
    game_grid.append(tr);

    return R.range(0, column_count).map(function (column_index) {
        const td = document.createElement("td");
        tr.append(td);
        td.textContent = `[${row_index},${column_index}]`;

        td.onclick = function () {
            document.querySelector("aside").textContent = (
                `Row: ${row_index}, Column: ${column_index}`
            );
            state = LightsOut.flip(row_index, column_index, state);
            update_grid();
        };

        return td;
    });
});

update_grid();
