function myfun(str1,str2){
    var x = 3;
    return str1;
   console.log(str1+str2);  //This is not executed bcz when you return the answer till there its stop the program exection.
   console.log(x)            //not executed bcz stop exection of the program
}
var result = myfun('abc');
console.log(result);

var result1 = myfun(3,8)
console.log(result1)


function fun1(){
    var x = 8;
    var y = 4;
    return x+y;
}
console.log(fun1)    //with out () operator we can't call the function.



// // local variables
// function fun2(){
//     var x = 9;
//     var y = 8;
//     console.log(x+y)
// }
// fun2()
// console.log(x);  // Not accessed the x value bcz x is local variable.



function add(){
    var x = 1;
    var y = 2;
    return function(){   //this is closure function without calling its execute.
        var x = 5;
        console.log('Hai this is inner function')
        return x;
    }
}
var result = add()
console.log(result())




// Strings and Strings method
var name = 'john "doe"'
console.log(name)

var fName = 'rockroy';
console.log(fName.length)


var bigString = 'Hai this is \'BigString\' and like string';
console.log(bigString);