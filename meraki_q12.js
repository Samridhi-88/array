// let list1 = [1,2,3,4,5,6]
// let list2 = [2,3,1,0,6,7]
// list3=[]
// for(let i=0;i<list1.length;i++){
//     if (list1[i] in list2){
//         console.log(list1[i])
//     }
//     else{
//         list3.push(list1[i])
//     }
// }
// console.log(list3)


var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
if (!list2.includes(i)){
elements.push(i)
}
}
console.log(elements);
