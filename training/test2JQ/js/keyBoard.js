/**
 * Created by mariaalcocer on 12/17/2015.
 */
function Keyboard (){
    //this.createContainer();
};

function createContainer () {
    var a = '<input id="field">';
    $('body').append(a);
};


function createButton(){
    for(var i = 65; i <= 90 ; i++)
    {
        var keyb =  '<button id="'+String.fromCharCode(i)+'" class="event">'+String.fromCharCode(i)+'</button>';
        $('body').append(keyb);

       // console.log(String.fromCharCode(i));
    }
    $('.event').on('click',clickOnKey);
    var space = '<button id="space">Space</button>';
     //space.on('click',function(){
 //   });
    $('body').append(space);
    var dele = '<button id="space">Delete</button>';
    $('body').append(dele);
};
function clickOnKey (e){
    $('#field').val($('#field').val()+e.target.id);

};



