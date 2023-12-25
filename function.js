//function

//default parameter function 
function calc(a,b=0){   //if user dont pass the second value when it's called then it's predefine
    return(2*(a+b));
}
console.log(calc(3)); 

//rest parameter 
function collecThings(x,...y){
    console.log('x='+x);
    console.log(y);
}
collecThings(1,2,3,4,5,6,7);

//arrow function
// const add=function(x,y){
//     return(x+y);
// }
const add=(x,y)=>{
    return(x+y);
}
console.log(add(10,69));

//nested funcion
function outer(){
    console.log('outer');
    function inner(){
        console.log('inner');
    }
    inner();
}
outer();

//callback function
function foo(bar){
    bar();
}