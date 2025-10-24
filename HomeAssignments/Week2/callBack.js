let browser = "Chrome"

function checkBrowserVersion(callback){
    
  setTimeout(() => {    
    callback(browser);
  }, 2000);
    
}

function version(ver){
    console.log(`The browser version of ${browser} is 32.01`)
    
}

checkBrowserVersion(version)