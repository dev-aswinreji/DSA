
// Implementation of Linear Search Algorithm:
// In Linear Search, we iterate over all the elements of the array and 
// check if it the current element is equal to the target element. If 
// we find any element to be equal to the target element, then return 
// the index of the current element. Otherwise, if no element is equal 
// to the target element, then return -1 as the element is not found.

// Below is the implementation of the linear search algorithm:

//Here generating random number using Math.random and that number should be length of array . Then iterating over according number . 
//Then checking whether the generated number contain in the generated array

let number : number = Math.floor(Math.random() * 10) 
const array: number[] = []

for(let i = 0; i < number ; i++)
    array.push(Math.floor(Math.random() * 10))

const arrayLength : number = array.length
const searchedNum : number = number

function linearSearch (array:number[],arrayLength:number,searchedNum:number) : number{
    for (let num = 0; num < arrayLength; num++)
        if(searchedNum===array[num])
            return num
        return -1   
}

let result = linearSearch(array,arrayLength,searchedNum)

result === -1 ? console.log('Element is not in array'): console.log('Element is present at index',result);



