# Part 2. A Little More of a Challenge...
1. Line 12 prints 3 because thats how many times the for loop iterated. i goes up to prices.length which is 3 in this instance. 
2. Line 13 prints 150 because that is what discountedPrice is set to at the last iteration. Since the last value is 300, discountedPrice = 300 * (1-0.5) which is 150.
3. Line 14 prints 150 because that is the final value that was assigned to it. Math.round(150 * 100) = 15000. 15000 / 100 = 150, which is the value that was printed out.
4. The function would return an array of discounted prices. The discount was 0.5 and the prices were [100, 200, 300] so the discounted array would look like [50, 100, 150].
5. Returns an error because i cannot be accessed outside of the for loop due to it being a let instead of a var which is what console.log(i) is trying to do.
6. Returns an error because discountedPrice cannot be accessed outside of the for loop due to it being a let instead of a var which is what console.log(discountedPrice) is trying to do.
7. Line 14 prints 150. The console.log(finalPrice) is trying to access finalPrice which it can because it was declared in the same block as the console command. This allows the finalPrice to actually be printed out in this case compared to the other two.
8. The function would return an array of discounted prices. The discount was 0.5 and the prices were [100, 200, 300] so the discounted array would look like [50, 100, 150]. The let command would not affect the array because let is the same as var in the use of this function.
9. Returns an error because it is trying to access the variable i when i is a let. i is declared in the for loop so it can only be accessed in the for loop, meaning that trying to access it outside the for loop results in an error.
10. Line 12 prints 3 which is the length of the prices array. This prints out because the const is set at the beginning the length = prices.length and doesn't change.
11. The function would return an array of discounted prices. The discount was 0.5 and the prices were [100, 200, 300] so the discounted array would look like [50, 100, 150]. The const command would not affect the array because there is no reassignment throughout the function, so the array would stay the same.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '3' + 2 = 32. The + is a concatenation which means 2 turns into its string representation and concatenates with 3.
    B. '3' - 2 = 1. The - is only seen as a subtraction symbol, so '3' is turned into a integer to subtract 2 from.
    C. 3 + null = 3. This + is seen as an addition symbol, so null in converted to 0 and added to 3.
    D. '3' + null = 3null. The + is a concatenation which means that null turns into a string version 'null' and concatenated with 3.
    E. true + 3 = 4. This + is seen as an addition symbol, so true is converted to 1 and added to 3.
    F. false + null = 0. This + is seen as an addition symbol, so false and null both turn into 0 and are added with each other.
    G. '3' + undefined = 3undefined. This + is seen as an concatenation symbol, so undefined is turned into 'undefined' and concatenated with 3.
    H. '3' - undefined = NaN. This - is seen as an subtraction symbol, so '3' turns into 3 and undefined turns into NaN. Any math equation with NaN turns into NaN.
14. A. '2' > 1 = true. '2' turns into numeric 2 and compared with 1 because 1 is numeric.
    B. '2' < '12' = false. They are both strings and so are compared with each other. This can be seen as '2' < '1' which is false because string 2 is greater than string 1.
    C. 2 == '2' = true. '2' is converted to its numeric version and compared with numeric 2.
    D. 2 === '2' = false. === does not type convert, so its 2 compared with '2' which is false.
    E. true == 2 = false. true type converts to 1 and compared to 2 which s false.
    F. true === Boolean(2) = true. Boolean(2) is already a bool value of true meaning true === true.
15. == and === operators are different because == allows type conversion, but === does not allow type converstion.
16. [part2-question16.js](part2-question16.js)
17. The result was [ 2, 4, 6 ]. The modifyArray function gets [1,2,3] and doSomething as parameters. modifyArray basically calls on a different function to do something to the numbers in an array and push it into a new array. doSomething doubles the numbers in the original array, resulting in the result we get in a new array.
18. [part2-question18.js](part2-question18.js)
19. 1    
    4  
    3  
    2  