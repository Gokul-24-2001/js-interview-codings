let n=1234
 let a=""
while(n>0){
  let r=n%10;
  a+=r
 let x=Math.floor(n/10)
  n=x
}
console.log(a);
