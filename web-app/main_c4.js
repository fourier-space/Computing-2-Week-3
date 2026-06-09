import Connect4 from "./Connect4.js";
import R from "./ramda.js";

const row_count = Connect4.row_count;
const column_count = Connect4.column_count;

let state = Connect4.empty_grid();

document.documentElement.style.setProperty("--row-count", row_count);
document.documentElement.style.setProperty("--column-count", column_count);

const game_grid = document.getElementById("game-grid");

const update_grid = function () {
    Connect4.to_array_grid(state).forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            if (cell === 1) {
                td_grid[row_index][column_index].className = "on-1";
            } else if (cell === 2) {
                td_grid[row_index][column_index].className = "on-2";
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

        td.setAttribute("tabindex", 0);

        td.onkeydown = function (event) {
            if (event.key === " " || event.key === "Enter") {
                td.onclick();
                return;
            }

            if (event.key === "ArrowUp") {
                td_grid.at((row_index - 1) % row_count)[column_index].focus();
                event.stopPropagation();
                return;
            }

            if (event.key === "ArrowDown") {
                td_grid.at((row_index + 1) % row_count)[column_index].focus();
                event.stopPropagation();
                return;
            }

            if (event.key === "ArrowLeft") {
                td_grid[row_index].at((column_index - 1) % column_count).focus();
                event.stopPropagation();
                return;
            }

            if (event.key === "ArrowRight") {
                td_grid[row_index].at((column_index + 1) % column_count).focus();
                event.stopPropagation();
                return;
            }

            console.log(event.key);
        };

        td.onclick = function () {
            document.querySelector("aside").textContent = (
                `Row: ${row_index}, Column: ${column_index}`
            );
            state = Connect4.drop_disc(column_index, state);
            update_grid();
        };

        return td;
    });
});

document.body.onkeydown = function (event) {
    if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
    ) {
        td_grid[0][0].focus();
    }
};

update_grid();
