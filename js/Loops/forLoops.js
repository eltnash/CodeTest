//Question

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######



/*We need a loop, each iteration of the loop ouputs the # symbol,
with each iteration the symbol increases by one until they total 7 on the last iteration
meaning that this loop must iterate 7 times

we know the starting position of the loop should be 1
we know the ending position of the loop sould be 7

what can we use to hold the hash symbols as they increment ?    hashtag 
what can we use to hold these values as they iterate from one ? calls
how can we increase the value with each iteration ?
how can we display/output the value with each iteration? */

// holding the values
let globalContainer = "";
let calls = 8;

for (i = 0; i < calls; i++){
    let localContainer = "#";  //localcontainer to hold hashtag symbol
    console.log(globalContainer); // display whats in the container
    globalContainer = globalContainer += localContainer; // string conactenation plus addition to container
};

//Answer

// let row = "";  // Start with an empty string
// for (let i = 0; i < 7; i++) {  // Loop 7 times
//     row += "#";  // Add one '#' each iteration
//     console.log(row);  // Print the current row
// }
