1. Line 12 will print out "3" to the web console. Console.log()
   will print out whatever that's inside the () to web console. In this case, 
   i is inside () and represents the index of the array of the input "prices." 
   After iterating all the numbers in the array "prices," i will be 3 since
   there are three elements in prices.
2. Line 13 prints 150 to the web console. This is because discountedPrice is 
   last used when the last element of the array "prices" is calculated. The 
   calculation is discountedPrice = 300 * (1 - 0.5) = 150.
3. Line 14 prints 150 to the web console. This is because finalPrice is 
   last used when the last element of the array "prices" is calculated. The 
   calculation is discountedPrice = 300 * (1 - 0.5) = 150. Then, the last
   finalPrice is calculated to be 150.
4. This function returns variable "discounted"'s value, which is [50, 100, 150].
   After "discounted" is declared as an empty array, the discounted value of
   each number in "prices" is pushed to the array. Therefore, the three
   discounted numbers from "prices" are returned in "discounted."
5. Line 12 will cause an error because the code is asking to print out the value
   of i. However, the i variable was declareed inside a for-loop with "let", so the varibale is only recognized only inside the for-loop. Since line 12 is outside the for-loop, i value is not being recognized; therefore, the i is 
   out-of-scope and throws an error. 
6. Line 13 causes an error because the code is asking to print out the value of
   discountedPrice. However, discountedPrice variable was declareed inside a 
   for-loop with "let", so the varibale is only recognized only inside the
   for-loop. Since line 13 is outside the for-loop, discountedPrice value is
   not being recognized; therefore, the discountedPrice is in out-of-scope and
   throws an error. 
7. line 14 will print 150 to the web console. This is because finalPrice is 
   last used when the last element of the array "prices" is calculated. The 
   calculation is discountedPrice = 300 * (1 - 0.5) = 150. Then, the last
   finalPrice is calculated to be 150. Although the varibale finalPrice is 
   declared using "let" instead of "var", finalPrice is in the same scope as
   line 14. 
8. This function returns variable "discounted"'s value, which is [50, 100, 150].
   After "discounted" is declared as an empty array, the discounted value of
   each number in "prices" is pushed to the array. Therefore, the three
   discounted numbers from "prices" are returned in "discounted." Although the
   declaration of discounted is changed from "var" to "let", this doesn't throw
   an error because the varibale is being delared in the same scope. 
9. Line 11 will cause an error because the code is asking to print out the value
   of i. However, the i variable was declareed inside a for-loop with "let", so the varibale is only recognized only inside the for-loop. Since line 11 is outside the for-loop, i value is not being recognized; therefore, the i is 
   out-of-scope and throws an error. 
10. Line 12 will print out "3" to the web console. Console.log() will print out
    whatever that's inside the () to web console. In this case, length is 
    inside () and represents a number. That number is the length of the array
    prices. Since length is not being reassigned, line12 is in the same scope
    as where it is declared, it does not cause an error. 
11. This function returns variable "discounted"'s value, which is [50, 100, 150].
   After "discounted" is declared as an empty array, the discounted value of
   each number in "prices" is pushed to the array. Therefore, the three
   discounted numbers from "prices" are returned in "discounted." Although the
   declaration of discounted is changed to "const", this doesn't throw
   an error because the varibale is being delared in the same scope as the
   return line. 
12. a. student.name
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorite Teacher'].name
    e. student.courseLoad[0]
13. a. 32. The character "32" came out because 3 is a string and it is
    concatenated with 2. 2 is an interger and maps to their exact string
    representation
    b. 1. This number 1 is the output because the string is map to their exact
    number representation. 
    c. 3. The null is considered absent, and the number 3 is the output. 
    d. 3null. The null maps to their exact string representation 
    e. 4 since true maps to 1.
    f. 0 since false maps to 0. The null is considered absent.
    g. 3undefined. "undefined" maps to their exact string representation.
    h. NaN. This stands for Not a Number. It tells us '3' is not a valid number. 
14. a. true. '2' is converted into a number that is bigger than 1.
    b. false. Alphabetically 1 is less than 2. 
    c. true. 2 and '2' have different data types but are the same character.
    d. false. 2 and '2' have different types and ==== also compares data types. 
    e. false. true is map to 1. 1 does not equal 2. 
    f. true since the number 2 is converted to true. true==true -> true.
15. == does the type conversion of the operands before comparing. === compares
    the two values and the data types of the operands.
16. look at part2-question16.js 
17. The result would to return a new array of [2, 4, 6]. First, we look at the
    function modifyArray. A new empty array of newArr is created. Then, we use
    the function doSomething to pass in each number in the array, [1, 2, 3], 
    and get an intgeter that is the double of the number. Then, each number is
    pushed to the newArr one by one. After all the numbers in the array has
    been iterated, modifyArray function returns the value of newArr, [2, 4, 6].
18. look at part2-question18.js 
19. 1
    4
    3
    2
