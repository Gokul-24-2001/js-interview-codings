let row=5
let col=5
let star=""
for(let i=1;i<=row;i++){
   
    for(let j=1;j<=col;j++ ){
        if(i==1 ||i==row){
            star+="* " 
        }
    
    else if(i<=row){
        if(j==1 ||j==col){
             star+="* " 
        }
        else{
            star+="  " 
        }

     }
    }
   
    star=star+"\n"
    
}
console.log(star)