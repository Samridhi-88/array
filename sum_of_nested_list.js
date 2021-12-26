let marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
let sum=0
for(let i of marks){
    for(let j of i){
        sum=sum+j
    }
}
console.log(sum)