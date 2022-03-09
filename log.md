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

Days 7-15: Feb 10-18, 2022

Today's Progress:
Built out backend on Django

- created models and seeded data on Django admin panel

20% through Angular course on Udemy

- began writing Typescript code
- created an Angular app
- created components through CLI and in IDE
- used HTTP request to pull from our heroku database
- property/event binding to pass variables was very rocky, so transitioned back over to React

Built out React app in 2 days

- styled using Material UI, Bootstrap, Animate.css
- user authentication is functional, components will display conditionally when user is logged in
- user curated data is sent to the database and stored to the API
- all components are linked and traverses through the site
- error checks are complete, need to add a demo user button and auto refresh page when drinks/comments are added

Thoughts:
Hardest week of the course -- creating a Django backend took us about a day and then dove headfirst into learning Angular. With a base in React, we felt that this was a tangible goal and we were able to build out a mostly function app where we could pull and display data from the API. Our largest hurdles began when we were trying to pass data between components and implement user authorization. We decided to pivot back to React with 2 days left for our project, so we would be able to present a full fledged functional project. Angular was a good challenge and hopefully will return to it with my group mates in the future.

Day 16-18: Feb 19-21, 2022

Snoozed! Mental reset.

Day 19: Feb 22, 2022

Today's Progress:
Game plan for next couple weeks
Watched through Big O notation section on Udemy
6kyu: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

Solution: function arrayDiff(a, b) {
return a.filter(ael => !b.includes(ael))
}

a bit of code golf refactoring to utilize filter and includes array methods

Thoughts:
Good refresher on Big O. Review of what we learned in class

Links to Work: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

Day 20-22: Feb 23-25, 2022

Today's Progress: Created React app to move VanillaJS Blackjack application. Scaffolded out the scoreboard, and thinking of creating a backend for user auth and storing player balances in Django.

Thoughts: Coming back to React was a bit of doozy, with a shift in emphasis personally onto CSS. The blackjack logic is all built out, so I want to learn how to style my game better. I've began to implement Bootstrap styling and testing out different styling libraries like Animate.css and Material UI.

Day 23: Feb 28, 2022

Today's Progress:
6kyu: Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Applied for Affirm apprenticeship
Created Github profile ReadMe

Thoughts: Code in 228sketchpad.js
Was able to figure out that I needed to turn the input into all lowercase, but then I tried to push each letter of the input into an array. I was unable to get my counter to work correctly, but after some research, I pushed each part of the string into an object as a key, and attached it to its specific counter. Once the loop ran through, I was able to see which keys were greater than one and attached a counter to that.

Day 24: Mar 1, 2022

Today's Progress: Completed 2 Code Wars, built out front end for ACFT and able to display individual cadets
Thoughts: Back end is proving tough to store an ArrayField with Date

Day 25: Mar 2, 2022

Today's Progress: Started on a code wars converting Roman numerals to integers. Completed one Hackerrank challenge. Going to start going through Hackerrank from here on out, as companies seem to utilize that and Leetcode more. Recieved frontend challenge for Affirm and will complete on Friday.
Thoughts: Initial thoughts were to populate an object with keys and values relating to Roman numerals then parsing through logic to calculate preceding numerals.

Day 26: Mar 3, 2022

Today's Progress: Udemy Javascript Algorithms and Data Structures Course - Analyzing performance of arrays and objects, problem solving approaches and patterns, Sliding window pattern, Divide and conquer
Thoughts: Covered Frequency Counter and Multiple Patterns - multiple patterns was very useful to see how to parse through an array from both ends. Sliding window algo helped me understand a more efficient way to compare a combination of values in an array. Divide and conquer was a simplified version of a binary tree, but seeing it visually makes it easier to understand and derive.

Day 27: March 4, 2022

Today's Progress: Worked on Kayak code challenge
Thoughts: Scaffolded out site layout

Day 28-29: March 5-6, 2022

Today's Progress: Disc Golf Tournament @ Bridge of the Gods

Day 30: March 7, 2022

Today's Progress: Continued Kayak cc
Thoughts: Ran into errors while pulling data from API (CORS error)

Day 31: March 8, 2022

Today's Progress: Built out brochure for DoubleMint disc tourney and Squarespace info site for potential sponsors.

Day 32: March 9, 2022

####################################################################################
TO DOS
For BYOB:
Demo user button
Auto refresh after adding drink/comment

Priorities:

Redux
S3 Certification
Refactor Project 1 with React (check with instructor feedback)
Refactor Project 2 with cleaner CSS and implement game GOATs (check with instructor feedback)
Refactor Project 3 with Django backend with user auth and cleaner CSS (check with instructor feedback)

Code Challenges (everyday 45 minutes)
Data structures and algorithms (udemy - everyday 90 minutes)
Answer Rapid Fire Interview Questions (everyday 45 minutes)
Job applications (5x a week)
Post on LinkedIn (1x a week)
App Academy PRO Projects

Passion Projects - Army PT app, NBA props calculator
Read through Python textbook
Review topics in Cracking the Coding Interview
AWS Certification

Blackjack

Create backend with cards, user auth, AWS images
cards - all cards
cards/suit - all cards of suit
cards/suit/number - specific card

API call to grab each hand
