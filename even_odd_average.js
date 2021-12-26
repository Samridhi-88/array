var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
even_count=0
odd_count=0
even_sum=0;
odd_sum=0;
even_average=0
odd_average=0
for(let i of elements){
    if (i%2==0){
        even_count+=1
        even_sum+=i
        even_average=even_sum/even_count
    }
    else{
        odd_count+=1
        odd_sum+=i
        odd_average=odd_sum/odd_count
    }
}
console.log("Even Number Average",even_average)
console.log("Odd Number Average",odd_average)
console.log(even_sum)
console.log(odd_sum)
console.log(even_count)
console.log(odd_count)
