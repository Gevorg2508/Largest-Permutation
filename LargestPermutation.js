let arr = [1,2,9,2,3,2,4,5];

let largestPermutation = function (k,arr){
   let newArr = [];
for(let i = 0; i< k; i++){
    if(Math.max(...arr)){
        let first = arr[0];
        let max = Math.max(...arr);
        let ind = arr.indexOf(Math.max(...arr));
        arr.splice(ind,1,first);
        arr.shift();
        newArr.push(max);
        }
    }
    newArr.push(...arr);
        return newArr;
}
console.log(largestPermutation(3,arr));