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


