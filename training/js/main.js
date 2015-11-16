/**
 * Created by mariaalcocer on 11/5/2015.
 */
var sayHello = function(name, age){
    if(age >50)
        console.log('Hello' + name + ' estas viejo');
    else
        console.log('Hello' + name + ' estas joven');
};
var sum = 0;
var index = 0;

var getAvg = function(collection, cant){

    if(cant > 1) {
        return getAvg(collection, cant - 1) + (collection[cant - 1])/(cant);
    }
    else
    {
        return (collection[cant - 1])/(cant);
    }

};
/*var getSum = function(collection, cant){

    if(cant > 0) {
        return getSum(collection, cant - 1) + collection[cant - 1];
    }
    else
    {
        return ;
    }

    };
console.log(getSum([5,3,4,9,2], 5));*/
console.log(getAvg([3,3,3], 3));


var isCapicua = function(num){
    var colletionNumbers = '';
    var numAux = num;
    var index = 0;
   // var char;
    while(numAux > 0) {
        numAux = parseInt(numAux);

        if(numAux % 10 != 0)
        { colletionNumbers = colletionNumbers + numAux % 10;
            index ++;
        }
        numAux = numAux / 10;

    }
    colletionNumbers = colletionNumbers.split('');
    colletionNumbers = colletionNumbers.reverse();
    if (Number(colletionNumbers) == num)
    {
        console.log('si');
    }
    else
    {
        console.log('no');
    }
   // for(int i = 0; i< colletionNumbers.length)
    console.log(num);
    console.log(colletionNumbers,  index);
}
var caipua = isCapicua(121);
/*
 //should return
 //sum is :6
 //mas is :3
 //min is :1
 //Avg is :2
*/