import R from "./ramda.js";
import LightsOut from "./LightsOut.js";

const row_count = 5;
const col_count = 5;

const grid = document.getElementById("grid");

let board = LightsOut.empty_grid();

document.body.onkeydown = function (event) {
    if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
    ) {
        grid_tds[Math.floor(row_count / 2)][Math.floor(col_count / 2)].focus();
        return;
    }
};

const grid_tds = R.range(0, row_count).map(function (row_index) {
    const tr = document.createElement("tr");
    grid.append(tr);

    return R.range(0, col_count).map(function (col_index) {
        const td = document.createElement("td");
        tr.append(td);

        td.setAttribute("tabindex", "0");

        td.onclick = function () {
            board = LightsOut.press(row_index, col_index, board);
            update_grid();
        };

        td.onkeydown = function (event) {
            if (event.key === "Enter" || event.key === " ") {
                td.onclick();
                return;
            }
            if (event.key === "ArrowUp") {
                grid_tds[
                    (row_index - 1 + row_count) % row_count
                ][col_index].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowDown") {
                grid_tds[(row_index + 1) % row_count][col_index].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowLeft") {
                grid_tds[row_index][
                    (col_index - 1 + col_count) % col_count
                ].focus();
                event.stopPropagation();
                return;
            }
            if (event.key === "ArrowRight") {
                grid_tds[row_index][(col_index + 1) % col_count].focus();
                event.stopPropagation();
                return;
            }
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