import R from "./ramda.js";
import LightsOut from "./LightsOut.js";

const row_count = 5;
const col_count = 5;

const grid = document.getElementById("grid");

let board = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
];

const grid_tds = R.range(0, row_count).map(function (row_index) {
    const tr = document.createElement("tr");
    grid.append(tr);

    return R.range(0, col_count).map(function (col_index) {
        const td = document.createElement("td");
        tr.append(td);

        td.onclick = function () {
            board = LightsOut.press(row_index, col_index , board);
            update_grid();
        };

        return td;
    });
});

console.log(grid_tds);

const update_grid = function () {
    grid_tds.forEach(function (row_tds, row_index) {
        row_tds.forEach(function (td, col_index) {
            td.className = (
                board[row_index][col_index]
                ? "on"
                : "off"
            );
        });
    });
};

update_grid();