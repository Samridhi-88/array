// An array is a type of object used for storing multiple values in a single variable


let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
console.log(fruits);


// Access an Array item using the index position
// Example :-
let fruits = ["Apple", "Banana", "Orange"]
 console.log(fruits[1]);


var array = [ 1, 2, 3, 4, 5, 6 ];
for (var index = 0; index < array.length; index++) {
   console.log(array[index]);
}


// Add an item to the end of an Array
// Example :-
let fruits = ['Apple', 'Banana']
fruits.push('Orange')
console.log (fruits)


// Remove an item from the end of an Array
// Example :-
let fruits = ['Apple', 'Banana', 'Orange']
fruits.pop()
console.log(fruits)


// Remove an item from the beginning of an Array
// Example :-
let fruits = ['Apple', 'Banana', 'orange']
fruits.shift()
console.log(fruits)

 
// Add an item to the beginning of an Array
// Example :-
let fruits = ['Apple', 'Banana']
fruits.unshift('Grapes')
console.log(fruits);


// Find an index of an items the Array 
// Example :-
let fruits = ['Apple', 'Banana', 'Orange']
let position = fruits.indexOf('Banana')
console.log(position);


// Remove an item by its index position    
// Example :-
let fruits = ['Apple', 'Banana', 'Orange']
let removedItem = fruits.splice(1,1)


