/**
 * Created by MariaAlcocer on 11/27/2015.*/
var createOneTable= function(sizeRow , sizeColumn){
    var table = document.createElement('table');
    for (var i = 0 ; i < sizeRow ; i ++)
    {

    }

};

var tab = createOneTable(2,2);

//crear con jquery tabla

style = '<style>.cell{background: green; width: 50px; display: inline-block;}'+
'.container {background-color:#Fc0; width:159px;}</<style>';

var table = '<div class="container">'+
'    <div class="cell"><div>'+
'    <div class="cell"><div>'+
'    <div class="cell"><div>'+
'   <div class="cell"><div>'+
'</div>';

var drawField = function (size){
    var style = '<style>.cell{background: green; width: 50px; display: inline-block;}'+
        '.container {background-color:#Fc0; width:159px;}</style>';
    var containerStr = '<div class="container"></div>';
    var cellStr = '<div class="cell"></div>';
    var styleEl = $(style); //html element
    var containerEl = $(containerStr); //html element

    for(var i = 0, total=size*size; i < total; i++)
    {
        var cellEl = $(cellStr);//html element
        cellEl.on('click', function(e){
        console.log(e);
        console.log('Hello! you clicked on a cell');
        $(e.target).css('background','red');
        });
        containerEl.append(cellEl);
    }
    $('body').html(styleEl);
    $('body').append(containerEl);
    //se puede usar el .html lo que hace es borrar todo el documento y reemplazr lo que hay en mi codigo
    //$('body').html(styleEl);

};
//NO FUNCIONA!!!
