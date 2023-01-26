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

/* 5. It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

function getAverage(arr){
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return Math.floor(sum / arr.length);

}



/* 6. You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

function check(a, x) {
  for(i=0;i<=a.length;i++){
    if(a[i]===x){
      return true
    }
    
    }return false
  }


/* 7.

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/

function twiceAsOld(d, s) {
  return  Math.abs((s*2)-d)
}


/*  8. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

*/

const areaOrPerimeter = function(l , w) {
  if(l===w){
    return l*w
  }else{
    return (l+w)*2
  }
};


/* 9.Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers. */


function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
}



/* 10. Prolog:
This kata series was created for friends of mine who just started to learn programming.
 Wish you all the best and keep your mind open and sharp!

Task:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type.
 Return true if types match or false if not.
*/

function typeValidation(variable, type) {
  // Your code should be here ;) 
  if(typeof(variable) === type) {
    return true;
 }
  return false;
}



