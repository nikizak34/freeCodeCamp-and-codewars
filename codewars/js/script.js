//1.Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
   if(number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
  
}



/*2.Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

const quarterOf = (month) => {
  // Your code here
  if(month<=3){
    return 1
  }else if(month<=6){
    return 2
  } else if (month <= 9) {  
    return 3  
  } else if (month <= 12) {  
    return 4  
  }
}


/* 3. Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).

*/

/* 4. Fix the function
I created this function to add five to any number that was passed in to
 it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
*/

function addFive(num) {
  var total = num + 5
  return total
}



