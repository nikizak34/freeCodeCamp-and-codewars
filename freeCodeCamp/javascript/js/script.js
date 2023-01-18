/*
1.Write a switch statement which tests val and sets answer for the following conditions:


1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
 
switch(val){
case 1:
answer="alpha";
break ;
case 2:
answer="beta"
break;
case 3:
answer="gamma"
break
case 4:
answer="delta"



}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);


/*

2. Write a switch statement to set answer for the following ranges:

1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
*/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

 switch (val) {
  case 1:
 case 2:
  case 3:
    answer = "Low";
    break;

  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;  

  case 7:
  case 8:
  case 9:
    answer = "High";
    break;      
}

  // Only change code above this line
  return answer;
}

sequentialSizes(1);




/*

3.Change the chained if/else if statements into a switch statement.

*/

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "bob" :
    answer = "Marley";
    break
  case 42:
    answer = "The Answer";
    break
  case 1:
    answer = "There is no #1";
    break
  case 99: 
    answer = "Missed me by this much!";
    break
  case 7:
    answer = "Ate Nine";
    break
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);


/*

4.
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

*/


let count = 0;

function cc(card) {
  // Only change code below this line
if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
    
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
    return String(count) + " Hold";
  }
  else {
    return String(count) + " Bet";
  }

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');