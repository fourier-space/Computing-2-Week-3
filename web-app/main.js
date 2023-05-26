import R from "./ramda.js";

const game_rows = 10;
const game_columns = 11;

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_board = document.getElementById("game_board");

R.range(0, game_rows).forEach(function (row_index) {
    const tr = document.createElement("tr");

    R.range(0, game_columns).forEach(function (column_index) {
        const td = document.createElement("td");
        td.textContent = `${column_index},${row_index}`;
        
        td.onclick = function () {
            console.log(`${column_index},${row_index}`);
        };

        tr.append(td);
    });

    game_board.append(tr);
});
