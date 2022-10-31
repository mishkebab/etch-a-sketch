console.log("Hello World");

const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.textContent = "";

    container.appendChild(row);

    for (j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.textContent = "";

        row.appendChild(column);

        column.addEventListener("mouseover", () => changeColor(column));
    }
}

function changeColor(div) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor;
    console.log
}
