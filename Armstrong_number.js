let num=370;
let n=370;
let sum=0;
let count=0;
for(let i=n;i>0;i=Math.floor(i/10)){
    count++;
}
// console.log(c)
//exponential operation (**)
while(n>0){
let r=n%10
sum=sum+(r**c)
// console.log(sum)
n= Math.floor(n/10)
}
 if(num===sum){
    console.log(`${num} is Armstrong number`);
 }
 else{
        console.log(`${num} is not Armstrong number`);

 }
