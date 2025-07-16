let a="hello world"
// let s=a.split('');
let s1=[]
let rev=""

for(let i=0;i<a.length;i++){
let ch=a[i]
if(ch!==" "){
  rev+=ch
}
else{
  s1.push(rev)
  rev="";
}
}
if(rev){
  s1.push(rev)
}
let m=s1.map((word)=>{
   
  let r=""
 for(let i=word.length-1;i>=0;i--){
  r+=word[i]
}
return r})

console.log(rev,s1,m.join(" "));
