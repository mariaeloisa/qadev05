/**
 * Created by MARIA on 04/12/2015.
 */
function Table(sTable){
    //validar vacio y letras
    //VALIDAR QUE SEA MENOR QUE 3 EL TAMANO DE LA TABLA
    this.sizeTable =  sTable;
    this.valueCell = '';
    this.cell = [];
    this.Ships = [];
    this.createTable();

}
/**
 * function for create a new table dynamically
 */
Table.prototype.createTable = function(){
    for(var row = 0; row < this.sizeTable; row++)
    {
        this.cell[row] = '';
        var colu = [];
        for(var col = 0; col < this.sizeTable; col++)
        {
            colu[col] = '0';
        }
        this.cell[row] = colu;
    }
}
/**
 *  function for display the table
 */
Table.prototype.displayTable = function(){
    for(var row = 0; row < this.sizeTable; row++)
    {
        //for(var col = 0; col < this.sizeTable; col++)
        //{
            console.log(this.cell[row]);
        //}
    }
}
/**
 * Este metodo genera solo tres barcos 'falta!!!!'
 * This function
 */
Table.prototype.createShips = function(){
    var cantShips = 0;
    var cantFill = (Math.pow(this.sizeTable,2)*0.4 ).toFixed();
   do// for(var i = 1; i <= cantFill ; i++)
    {
        var sizeTableShip = this.createNumber(this.sizeTable);
        this.Ships[cantShips] = new Ship(sizeTableShip);
        cantFill = cantFill - sizeTableShip;
        cantShips++;
    }
   while(cantFill > 0)

}
/**
 * Este metodo solo es para prueba para verificar si genera ships
 */
Table.prototype.displayShips = function () {
    for(var i = 0; i < this.Ships.length; i++)
    {
       console.log(this.Ships[i]);
    }
}
/**
 * function for create dynamically the sizeTable of ship
 * that is not matter for this application still
 * @returns {number}
 */
Table.prototype.createNumber = function (){
    var number = 0;
    do
    {
        number = Math.floor((Math.random() * 3) + 1);
    }
    while(number > 3);
    return number;
}

Table.prototype.setShipsOnTable = function(){

    var indexShip = 0;
    do
    {
        var coorX = Math.round(Math.random() * (t.sizeTable - 1));
        var coorY = Math.round(Math.random() * (t.sizeTable - 1));
        //this line is to validate that there is space for the ship
       // if()
        if(coorY + this.Ships[indexShip].sizeShip <= this.sizeTable)
        {
            //console.log('s'+(coorX + this.Ships[indexShip].sizeShip));
            //console.log(coorX+'-'+coorY);
            var pos = Math.round(Math.random()*1);
            console.log('H'+pos);
            this.fillTable(coorX,coorY,indexShip,pos);
            indexShip++;
        }
    }
    while(indexShip < this.Ships.length);

}
//Table.prototype.verifySpace = function (coorX,coorY,indexShip) {
//    for(var col = 0; col < this.Ships[indexShip].sizeShip; col++)
//    {
//        this.cell[coorX][coorY] = this.getLetter(coorX)+''+coorY;
//        coorY++;
//    }
//}
/**
 * THis functions fill a ship in the table
 * @constructor
 */
Table.prototype.fillTable = function (coorX, coorY, indexShip, pos) {

    var sizeShip = this.Ships[indexShip].sizeShip;
    if(pos == 0)
    {
        console.log(indexShip);

        for(var i = 0; i < sizeShip; i++)
        {
            this.cell[coorX][coorY] = indexShip;
            this.Ships[indexShip].Cell[i] = this.getLetter(coorX)+''+coorY;
            coorY++;
        }
    }
    else
    {
        console.log(indexShip);

        for(var i = 0; i < sizeShip; i++)
        {
            this.cell[coorX][coorY] = indexShip;
            this.Ships[indexShip].Cell[i] = this.getLetter(coorX)+''+coorY;
            coorX++;
        }
    }


}
Table.prototype.getLetter = function (index){
    var abcd = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    return abcd[index];
}
//Table.prototype.;
/**
 * This function validates that a ship not is entered over other ship
 */
//Table.prototype.validatePlaceForShip = function(){
//    var coorX = Math.round(Math.random() * sizeTableAux);
//    var coorY = Math.round(Math.random() * sizeTableAux);
//}