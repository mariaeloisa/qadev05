/**
 * Created by MariaAlcocer on 11/30/2015.
 */
/**
 * This a functions for the excercise 1
 * @param word1
 * @param word2
 */
var takeStrings = function(word1, word2){
    var numWords = arguments.length;
    var maxletter = 0;
    for(var j = 0 ; j < numWords ; j++)
    {
        if(maxletter <= arguments[j].length)
        {
            maxletter = arguments[j].length;

        }

    }
    //maxletter = maxletter +4;
    console.log(writeSign(maxletter +4));
    for(var i = 0 ; i < numWords ; i++)
    {
        if(arguments[i].length < maxletter)
        {
            var space = maxletter - arguments[i].length;
            for(var c = 0; c < space;c++)
            {
                arguments[i] = arguments[i] + " ";
            }
            console.log('*',arguments[i],'*');
        }   //equalSpace(arguments[i],maxletter);
        else
            console.log('*',arguments[i],'*');

    }
    console.log(writeSign(maxletter +4));
   // console.log(arguments.length[1]);
    //
};
var writeSign = function(number){
    var signs = [];
    while(number !== 0)
    {
        signs = signs + '*';
        number --;
    }
    return signs;
};
var parag = takeStrings('hola','a','todos');
/**
 * this is a functions for the optional exercise
 */
var countVowels = function (paragraph){
    var count = 0;
    for(var i = 0 ; i < paragraph.length ; i++) {


        if(paragraph[i]=='a' || paragraph[i]=='e'|| paragraph[i]=='i'|| paragraph[i]=='o'|| paragraph[i]=='u')
        {
            count ++;
            //paragraph[i].replace('*');
        }
        //console.log(paragraph[i]);

    }
    console.log('This pragraph has ' , count, 'vowels' );

    console.log(paragraph.replace(/a/g,'*').replace(/e/g,'*').replace(/i/g,'*').replace(/o/g,'*').replace(/u/g,'*'));
   // console.log(paragraph);
};
var countVowelParag = countVowels('este es un examen');

