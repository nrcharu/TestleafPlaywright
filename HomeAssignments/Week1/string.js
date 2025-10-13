// Assignment Requirements: 
// 1. Create a variable originalWord (example: "madam"). 
// 2. Convert it to characters using split(""). 
// 3. Use a for loop from end to start to reverse and store the string in reversedWord. 
// 4. Print the reversed word using console.log(). 
// 5. Use an if statement to compare both words. 
// 6. Print "It’s a palindrome!" if they match, else print "Not a palindrome!". 

let originalWord = "malayalam"
let reversedWord = ""

let splitOrginalWord = originalWord.split("")
let len = splitOrginalWord.length

for(let i=len-1;i>=0;i--){
    
    reversedWord+=originalWord.charAt(i)
}

if(originalWord===reversedWord){
    console.log(`${originalWord} is a Palindrome !`)
}else {
    console.log(`${originalWord} is NOT a Palindrome !`)
}