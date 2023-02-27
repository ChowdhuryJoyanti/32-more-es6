const numbers = [2,3,4,5,6,7,8,9,9];

// console.log(output);

function getDoubles(numbers){
        const output = [];
    for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);

}
return output;
};
function doubleItOld(num){
    return num * 2;
}

const doubleIt = num => num * 2;

 const makeDouble = numbers.map(doubleIt);
 const makeDoubleDirect = numbers.map(num => num * 2);
//  console.log(makeDoubleDirect);
 const makeDouble2 = numbers.map(x => x * 2);
 const fiveTimes = [1,2,3,4,5,6].map(x => x * 5);

 console.log(fiveTimes);
/*
1.get an array
2.for every elements of the aray to do somethig
3.store the result in an aray
4.return the aray result


*/

// const result = getDoubles(numbers);
// console.log(result);
// console.log(makeDouble);