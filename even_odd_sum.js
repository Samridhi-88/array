var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
let even=[];
let odd=[];
even_sum=0;
odd_sum=0;
for(let i of elements){
    if (i%2==0){
        even_sum+=i
    }
    else{
        odd_sum+=i
    }
}
console.log("Even Number Sum",even_sum)
console.log("Odd Number Sum",odd_sum)