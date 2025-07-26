// Iterative method for given number
let num=7
let total=1;
for(let i=1;i<=num;i++){
    total=total*i;
}
console.log(total)
// recursive method

function fact(num){
 if(num==1){
    return 1
 }
    return num*fact(num-1)
    //console.log(res)
}
console.log(fact(num))
