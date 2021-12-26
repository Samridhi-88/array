const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
let list=[]
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
   list.push(name[i])
}
if (store===string) {
   console.log("its palindrome string")
   console.log(list)
}
else {
   console.log("it's not a palindrome string")
}
