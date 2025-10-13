// Assignment Requirements: 
// 1. Start by creating a variable named score and assign it a numeric value (for example, 85). 
// 2. Use a switch statement with the expression true — this helps check score ranges inside each 
// case. 
// 3. Inside the switch block, write cases for different score ranges: 
// o If the score is 90 or above, display "Grade: A". 
// o If the score is 80 to 89, display "Grade: B". 
// o If the score is 70 to 79, display "Grade: C". 
// o If the score is 60 to 69, display "Grade: D". 
// o For anything below 60, display "Grade: F". 
// 4. Run the program and verify that the correct grade is displayed for the score you entered. 

let score = 69

switch(true){
    case (score>=90):
        console.log("Grade A")
        break
    case (score >=80 && score<=89):
        console.log("Grade B")
        break
    case (score >=70 && score<=79):
        console.log("Grade C")
        break
    case (score >=60 && score<=69):
        console.log("Grade D")
        break
    case (score < 60):
        console.log("Grade F")
        break
}