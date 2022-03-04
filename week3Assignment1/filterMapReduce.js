const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Contains an array where it filters the values from tempArray, where a moduled by 3 is equal to 0
const filterArray = tempArray.filter(a => a%3 === 0)


// Map makes an array, where the values are stored as true or false for every given value stored within tempArray. It is true when the condiotn of a is met and false when it is not
const mapArray = tempArray.map(a => a%3 === 0)

// reduce() reduces the size of the array to either a singular value or object based on the contents of the arrey
const sumArray = tempArray.reduce((a,b) =>{
    return a+b
})

console.log("\nThis is the filtered array of tempArray that is divisible by 3: " + filterArray)
console.log("\nThis is the array of numbers that is divisible by 3 and returns (true/false): " + mapArray)
console.log("\nThis is the total sum of the array: " + sumArray)