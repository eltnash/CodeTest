/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.  */


// create a function named chessBoard and pass in the parameter n
function chessBoard(n){
      
      // create two variables, one representing the the "#" character and the other representing an string with a white space
      let hash = "#";
      let emptySpace = " ";

      /* concactenate both variables containing "#" character and white space " ". 
      Repeat the sequence pattertn (n) number of times, (n) being  the value passed as an argument. 
      Finally assign this expression to an new variable */
      let  result = (hash + emptySpace).repeat(n);

      //slice string in half
      // Step 1: Find the middle index of string sequence "#" + " "  in result variable and return a value to its nearest interger
      let midpoint = Math.floor(result.length / 2);

      // Step 2: Slice the string into two parts
      // with the middle index value found, create two variables which represent the first half of the string sequence and the second half of the string sequence
      let firstHalf = result.slice(0, midpoint);
      let secondHalf = result.slice(midpoint);

      // concactenate the two halfs with new line "/n" string character in the middle and at the end and a white space string chatacter at the begining and assing this expression to a new (finalResult) variable
      let finalResult =  " " + firstHalf + "\n" + secondHalf + "\n";

      // repeat the pattern in the finalResult variable n/2 times  to create the grid which outputs a grid  (n) x (n) in width and height. and display the results in a console log
      console.log(finalResult.repeat(n/2))
}

chessBoard(8) // call the function



    

 