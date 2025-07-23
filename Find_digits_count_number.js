let n=51234786
let count=0;
for(let i=n;i>0;i=Math.floor(i/100)){
count++;
}
console.log(count)
