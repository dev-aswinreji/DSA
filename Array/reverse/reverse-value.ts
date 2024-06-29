


const arrayReverse: number[] = [1, 2, 3, 4, 5, 6]

const arrayReverseLength : number = arrayReverse.length

function arrayReverseFunc (arrayReverse:number[],arrayReverseLength:number) : number[] {
    let temperaryValue : number;
    for (let num = 0; num < arrayReverseLength/2; num++) {
        temperaryValue = arrayReverse[num]
        arrayReverse[num] = arrayReverse[arrayReverseLength - 1 - num]
        arrayReverse[arrayReverseLength - 1 - num] = temperaryValue
    }
    return arrayReverse

}


let value = arrayReverseFunc(arrayReverse,arrayReverseLength)
console.log(value,'value is showing');

