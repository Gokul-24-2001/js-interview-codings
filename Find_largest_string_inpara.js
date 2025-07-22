let a="scooll largsbook kingmakerbo van"
let s=a.split(" ")
let r=""
for(let i=0;i<s.length;i++){
  if(s[i].length>r.length){
    r=s[i]
  }
}

console.log(r);
