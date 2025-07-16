let para="he is a boy , age is 18"
let p=para.split(' ')
let m="in"
let pre=false
for(let i=0;i<p.length;i++){
  let ch=p[i];
  // console.log(ch)  
  if(ch==m){
    console.log(`${m} is present in para`)
    pre=true;
    break;
  }
}
if(!false){
  console.log(`${m} is not present in para`)
}
// other way
// if(p.includes(m)){
//   console.log("boy presennt")
// }
// else if(!p.includes(m)){
//   console.log("boy not presennt")
// }

