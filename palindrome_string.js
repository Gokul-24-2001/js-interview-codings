<<<<<<< HEAD
// A palindrome string is a sequence of characters that reads the same backward as forward. 
//Examples include "madam", "racecar", and "rotor". Essentially, if you reverse the string, 
//it will be identical to the original string. 
let s1="madam"
let rev=""
for(let i=s1.length-1;i>=0;i--){
  rev+=s1[i]
}
if(s1===rev){
  console.log(`${s1} is palindrome`)
}
else{
  console.log(`${s1} is not palindrome`)
}
// console.log(rev)
let a="mam";
let rev="";
for(let i=a.length-1;i>=0;i--){
    rev+=a[i]
}
console.log(rev);
>>>>>>> 1a7a3ea (problems done)
