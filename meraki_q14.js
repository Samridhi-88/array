var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
let list1=[]
for(let i of n){
    for(let j of n){
        if (i+j===number){
            list1.push([i,j])
        }
    }
}
console.log(list1)