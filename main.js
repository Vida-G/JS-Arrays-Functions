//==================Exercise #1 ==========//
/*
    Write a function that takes in the string and the list of dog names, loops through 
    the list and checks that the current name is in the string passed in. The output should be:
    "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (a_list, a_string) =>{
    for(let i=0; i < a_list.length; i++){
        if (a_string.search(a_list[i]) >= 0){
            return `Matched ${a_list[i]}`
        }
    }
    return `No Matches`
};
console.log(findWords(dog_names, dog_string))


//============Exercise #2 ============//
/*
    Write a fucntion that takes in an array and removes every value that's double is over 50.
    //Expected output
    //Given arr == [13, 22, 26, 40, 1, 10]
    //Output arr == [13, 22, 1, 10]
    //Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...
*/

let given_arr = [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) => {
     for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] * 2 > 50){
            arr.splice(i,1)
        }
    }
    return arr
};
console.log(replaceEvens(given_arr))


//============ Codewars Problem #1 ============//
//============ Name: Is this a triangle? ============//
/*
    Implement a function that accepts 3 integer values a, b, c. 
    The function should return true if a triangle can be built with the sides of given length and false in any other case.
    (In this case, all triangles must have surface greater than 0 to be accepted).
*/
let isTriangle = (a, b, c) => {
    if(a + b > c && a + c > b && c + b > a){
        return 'True'
    }else{
        return 'False'
    }
};
console.log(isTriangle(5,1,5))
console.log(isTriangle(2,5,1))

//============ Codewars Problem #2 ============//
//============ Name: Sum of Cubes ============//
/*
    Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
    Assume that the input n will always be a positive integer.
    Examples: (Input --> output)
    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/
let sumCubes= (n) => {
    let sum = 0
    for (let i = 1; i < n+1; i++){
         sum += i ** 3
    }
    return sum
};
console.log(sumCubes(2))
console.log(sumCubes(3))
