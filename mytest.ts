/* // larger number
let a:number=10;

let b:number=5;
if(a>b)
    console.log(" a is larger");
else
    console.log("b is smaller"); */
//*** */
//sum of numbers from 1 to 10
/* let sum:number=0;
let i:number;
for(i=1;i<=10;i++)
    {
   sum= sum + i;}
console.log("result:"+ sum); */
// ***

/* // functions string

function greet(name:string):string
{
return name;
}
console.log("i am","nivedha")
// */

//func number
/* function greet(a:number,b:number):number
{return a+b;
}
console.log("result is:",greet(10,20));
 */
// check odd or even
function checkevenodd(num:number):string
{
    if(num % 2==0)
    {
        return "even";

    }
else{
    return "odd" ;

}
}
console.log("num even or odd",checkevenodd(7));