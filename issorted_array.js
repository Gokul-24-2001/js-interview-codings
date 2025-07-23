let b=[5,15,16,18,23,88];
function isSorted(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            return false
        }
    
    }
    return true
}
res=isSorted(b)
console.log(res?"array is sorted":"array is not sorted")