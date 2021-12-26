var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
list1=[]
for(let i of n){
    if (!list1.includes(i)){
        list1.push(i)
    }
}
console.log(list1)