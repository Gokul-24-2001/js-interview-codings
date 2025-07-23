let a=[2,3,4,2,5,7,8,2,5,5,3,4,1]
const removeDuplicate=(a)=>{
let obj={}
for(const val of a){
    if(obj[val]==(obj[val]||0)){
        obj[val]++
    }
    else{
        obj[val]=1;
    }
}
return obj
}

console.log(removeDuplicate(a))