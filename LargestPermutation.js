let arr = [1,2,3,2,3,9,2,4,5];

let largestPermutation = function (k = 1,arr = []){
   
for(let i = 0; i< k; i++){
    if(Math.max(...arr)){
        let first = arr.shift();
        let max = Math.max(...arr);
        let ind = arr.indexOf(Math.max(...arr));
        arr.unshift(max);
        arr.splice(ind+1,1,first);
        // console.log(first)
    }else{
        console.log('error');
    }
}
return  console.log(arr.join(' '));
}
largestPermutation(1,arr);