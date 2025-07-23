// sum of two arrays
let a=[1,2,3,4,5,6]
let b=[10,20,40,55,66,77,88]
let d=[21,32,25,62,77,2]
let c=a.concat(b,d)
let sum=0;
for(let i=0;i<c.length;i++){
    sum+=c[i]
}
console.log(sum);