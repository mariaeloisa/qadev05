/**
 * Created by mariaalcocer on 11/20/2015.
 */
var Table = function (size){
    this.size = size;
    //crear la matriz
    this.emptyCell = '0';
    this.cells = [];
    this.init();
    this.ships = [];
    this.createShips();
    //this.createShips();
    //crear el tablero en consola
    this.draw();
};

//var init = function(size){


//}


//profe
Table.prototype.init = function (){
    for (var r = 0; r < this.size; r++)
    {
        this.cells[r] = [];
        for (var c = 0; c < this.size; c++)
        {
            this.cells[r][c] = this.emptyCell;
        }
    }
};
Table.prototype.draw = function (){
    for (var r = 0; r < this.size; r++)
    {
        console.log(this.cells[r]);
    }
};
Table.prototype.createShips = function (){
    //para crear los demas lo podemos dentro de un for
    //al realizar el this.algo ya estamos refernciando que este ship pertenece a ese tablero
    this.ships.push(new ship(3));

};