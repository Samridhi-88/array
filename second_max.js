var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
let mex=0
let second_mex=0;
for(let i=0;i<numbers.length;i++){
    if (mex<numbers[i]){
        if (second_mex<mex){
            second_mex=mex
        }
        mex=numbers[i]
    }
    else{
        if(second_mex<numbers[i]){
            second_mex=numbers[i]
        }
    }
}
console.log(second_mex)