function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from database...");

    // 3-second delay
    setTimeout(() => {
      const data = true; 

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }
    }, 3000);
  });
}

// Promise handling
fetchDataFromDatabase()
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.log(error); 
  });
