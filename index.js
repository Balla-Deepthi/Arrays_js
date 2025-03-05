// Create an Array
// Create an array with five numbers and print it.
var arr=[1,2,4,6,8]
console.log(arr)
// Access an Element
// Given an array, print the third element.
console.log(arr[2])
// Change an Element
// Modify the second element of an array to a new value.
arr[1]=10
console.log(arr)
// Find Length
// Write a function that returns the length of an array.
console.log(arr.length)
// Add an Element (Push)
// Add a new element to the end of an array.
arr.push(24)
console.log(arr)
// . Remove the Last Element (Pop)
// Remove the last element from an array and print the updated array.
arr.pop()
console.log(arr)
// Loop Through an Array
// Use a loop to print each element of an array.
for(element of arr)
{
    console.log(element)
}
// Check if an Element Exists
// Write a function to check if a given value exists in an array.
function elementExist(i)
{
    var arr=[1,5,82,94,7]
    var count=0
    for(element of arr)
    {
        if(element==i)
        {
            console.log(`${i} exists`)
            count=1
            break
        }
       
        
        
    }
    if(count==0)
    {
        console.log(`${i} not exists`)
    }
       
}
elementExist(5)
// Copy an Array
// Create a copy of an array and print it.
var arr2=arr
console.log(arr2)
// Convert Array to String
// Convert an array to a string using .join() and print the result.
var arr3=arr.join()
console.log(arr3)



