import { Page, test } from'@playwright/test';

test.use({
  storageState: "Data/salesforceLogin.json"
});


export class LoginPage{

   page:Page
    //empty User define variable which of type page{PW}
    //Varaiable:Interface{PW}

    constructor(page:Page){
        this.page=page
    }

async loadUrl(){
await this.page.goto("https://orgfarm-e4ac807d98-dev-ed.develop.lightning.force.com/lightning/page/home")
}
}