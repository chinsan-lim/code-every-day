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

Day 4: Feb 6, 2022
snoozed lol. sry

Day 5: Feb 7, 2022

Today's Progress:
Shortest Word (7kyu)
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Sum of Minimums!(7kyu)

Given a 2D ( nested ) list ( array, vector, .. ) of size m \* n, your task is to find the sum of the minimum values in each row.

Thoughts:
.sort is a very powerful method to order an array from least to greatest, making grabbing the smallest value in a set an easy process.

Solutions:

# Shortest Word

def shortest_word(s): # your lovely code here!
res = s.split()
res.sort(key=len)
return len(res[0])

# Sum of Minimums

def sum_of_minimums(list): # your lovely code goes here!
mins = 0
for arr in list:
arr.sort()
mins += arr[0]

    return mins

Links to Work:
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

Day 6: Feb 8, 2022

Today's Progress:
Remove First and Last Character
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

Find GCD
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
Thoughts:

Remove First and Last Char
def remove_char(s):

return s[1:-1]

Find GCD
def mygcd(x, y):
xfactor = []
yfactor = []
for i in range(1, x + 1):
if x % i == 0:
xfactor.append(i)
for j in range(1, y + 1):
if y % j == 0:
yfactor.append(j)

    def intersection(lst1, lst2):
        common_factors = [value for value in lst1 if value in lst2]
        return common_factors
    print(max(intersection(xfactor, yfactor)))

This solution worked locally, but unfortunately not on Codewars. Gonna need to play some code golf to refactor solution to improve time complexities

Links to Work:
Remove First and Last Characters
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
Find the Greatest Common Divisor (GCD)
https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

Day 6: Feb 9, 2022

Today's Progress:

Scaffolded out full stack app for Army PT Test tracker. Backend is up and running and deployed and my partner built out the front end form. Added images to portfolio, links to header, and updated hobbies/passions

Thoughts:

Feel much better about Django today and happy that deployment went smoothly. Still need to connect from and backend, so need to double check endpoints to ensure that cadet list and cadest details displays properly.

Links to Work:
GH

Day 7: Feb 10, 2022

Today's Progress:
Thoughts:
Links to Work:
