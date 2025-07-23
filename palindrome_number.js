let n=151
let rev="";
for(let i=n;i>0;i=Math.floor(i/10)){
   let a=i%10
   rev+=a
}
if(n===parseInt(rev)){
    console.log(`Given ${n} is palindGrome number`)
}
else{
       console.log(`Given ${n} is not palindGrome number`)
 
}
// console.log(typeof(parseInt(rev))) 