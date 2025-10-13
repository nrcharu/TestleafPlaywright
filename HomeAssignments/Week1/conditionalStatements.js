// Assignment Requirements: 
// 1. Start by creating a variable named browserName and assign a value like "chrome" or any other 
// browser name. 
// 2. Use an if-else statement to check the value of browserName: 
// o If it is "chrome", display "Launching Chrome browser...". 
// o Otherwise, display "Launching default browser...". 
// 3. Next, create another variable named testType and assign a value like "smoke", "sanity", or 
// "regression". 
// 4. Use a switch statement to handle testType: 
// o When testType is "smoke", display "Running Smoke Tests...". 
// o When testType is "sanity", display "Running Sanity Tests...". 
// o When testType is "regression", display "Running Regression Tests...". 
// o If none of these match, display "Running Default Smoke Tests...". 
// 5. Run your program and check if the correct messages are printed based on the given values.


let browserName = "chrome"
let testType = "sanity"

if (browserName=="chrome"){
    console.log("Launching Chrome browser...")
}else if(browserName=="Firefox"){
    console.log("Launching Firefox browser...")
}else if(browserName=="Edge"){
    console.log("Launching Edge browser...")
}else{
    console.log("Launching default browser...")
}

let testTypeU = testType.toUpperCase()

switch(testTypeU){
    case "SANITY":
        console.log("Running Sanity Tests...")
        break
    case "SMOKE":
        console.log("Running Smoke Tests...")
        break
    case "REGRESSION":
        console.log("Running Regression Tests...")
        break
    default:
        console.log("Running default Tests...")
        break
}