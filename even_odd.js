var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
let even=[];
let odd=[];
for(let i of elements){
    if (i%2==0){
        even.push(i)
    }
    else{
        odd.push(i)
    }
}
console.log("Even Number",even)
console.log("Odd Number",odd)