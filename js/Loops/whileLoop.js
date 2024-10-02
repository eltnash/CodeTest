//How do we print numbers form 1 to 100 ?

//create container to store the numbers
let numbersUpTo100 = 1

// create a loop to continuously iterate numbers from 1 to 100 
while (numbersUpTo100 < 101){
    if (numbersUpTo100 % 3 === 0 && numbersUpTo100 % 5 === 0 ){
        console.log("FizzBuzz");
    } else if (numbersUpTo100 % 3 === 0){
        console.log("Fizz");
    } else if (numbersUpTo100 % 5 === 0){
        console.log("Buzz");
    } else{
        console.log(numbersUpTo100);   
    }
    //output the value in numbersUpTo100 for each iteration
    numbersUpTo100 += 1; // increment the value in numbersUpTo100 by 1 for each iteration
};

