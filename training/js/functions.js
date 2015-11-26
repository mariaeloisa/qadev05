/**
 * Created by mariaalcocer on 11/19/2015.
 */
/*var sayHello = function(){
  console.log('Hello word')
};
sayHello();*/

/*
(function(){
    console.log('Hello word')
})(); //function anonima ejecutable*/

(function(name){
    if(name)
        console.log('Hello word ' + name);

    else
        console.log('Hello word');
})('Dennys'); //function anonima ejecutable con parametro
