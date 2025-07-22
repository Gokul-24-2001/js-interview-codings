let n=780093050
 let a=""
 let b=""
while(n>0){
  let r=n%10
if(r!==0){
    a+=r
}
 let x=Math.floor(n/10)
  n=x
}
while(a>0){
 
  let r1=a%10
if(r1!==0){
    b+=r1
}
 let x1=Math.floor(a/10)
  a=x1
}
console.log(b);
