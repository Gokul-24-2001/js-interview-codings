let num=15
let isprime=false
// if(num==1){
//     console.log(`${num} is either prime or complex number`)
// }
for(let i=2;i<num;i++){
    if(num%i==0){
        isprime=true
    }
}
if(isprime){
    console.log(`${num} is not a prime number`)
}
else if(num<=2){
       console.log(`${num} is a prime number`)
}
else{
          console.log(`${num} is a prime number`)
 
}

