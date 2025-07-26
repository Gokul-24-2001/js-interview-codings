// fibnoci series..... 0,1,1,2,3,5,8,13,21..
let n=6
function Fibonaci(n){
    let n1=0;
    let n2=1;
    let n3;
    let arr=[n1,n2]
 for(let i=0;i<n;i++){
    
     n3=n1+n2;
     n1=n2
     n2=n3
 arr.push(n3);
 }
 return arr.toString()
}
console.log(Fibonaci(n))

// ......................................................................................
//recursive method
let num=10
function Fib(num){
    if(num<=1){
        return num
    }
    return Fib(num-1)+Fib(num-2)
}

function Fibonaci(num){
    for(let i=0;i<n;i++){
       console.log(Fib(i)) 
    }
}
Fibonaci(num);