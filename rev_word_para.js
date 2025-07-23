let s= "i am a good boy"
let r1=[]
let word=""
for(let i=0;i<s.length;i++){
 let ch=s[i]
      if(ch!==""){
        word+=ch
      }
      else{
         r1.push(word);
         word="";
      }
}
if(word){
      r1.push(word);
}
let m=r1.map((word)=> {
    let rev="";
    for(let i=word.length-1;i>=0;i--){
        rev+=word[i]
    }
return rev;
})
    

console.log(r1,m)    