Day 1: Feb 2, 2022

Today's Progress: scaffolded out extension to nba-dashboard project

Thoughts: found nba player stat endpoint in api, will build out that when user clicks on individual player, last 10 games will populate.

extension: include a filter so user can look at historical games vs a single opponent to aid user in player prop betting

Link(s) to work: n/a

Day 2: Feb 3, 2022

Today's Progress: first day of python, hw felt great, really liking python from intitial vibes. complete 6kyu Multiples of 3 and 5:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Thoughts:
function solution(number){
let arr = []
const reducer = (previousValue, currentValue) => previousValue + currentValue;
for (let i = 1; i < number; i++){  
 if (i%3 === 0 || i%5 === 0) {
arr.push(i)
}
}

return arr.reduce(reducer)
}

didnt really account for the error checks

Links to work: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

Day 3: Feb 5, 2022

Today's Progress: 6ku Split Strings - Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

Thoughts: overthought the process of the string concatenation. string index is similar to array index. initially tried to do this with a for loop (i'm sure yous till can)

function solution(str){
let i = 0
let spltarr = []
if(str.length%2 !== 0){
str += '\_'
}

while (i < str.length){
spltarr.push(str[i]+str[i+1])
i+=2
}

return spltarr
}

Links to Work: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
