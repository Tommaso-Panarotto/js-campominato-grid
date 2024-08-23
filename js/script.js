/*
0.recupero gli elementi dal DOM
1. genero le celle al click del bottone
2. inserisco le celle nel DOM
3. riempo le celle con il contenuto
4. reagisco al click sulla cella
*/

//FASE PREPARATORIA
//recupero gli elementi dal DOM
const grid = document.getElementById('grid');
const button = document.querySelector('button');

//numero celle
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

//reagisco al click
button.addEventListener('click', function () {
    //genero il numero corretto di celle
    for (let i = 0; i < totalCells; i++) {
        const cell = createCell();

        //aggiungo il numero della cella
        cell.append(i + 1);

        //reagisco al click sulla cella
        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
            console.log(cell.innerText);
        }
        )

        //la aggiungo in pagina
        grid.appendChild(cell);
    }
}
)
