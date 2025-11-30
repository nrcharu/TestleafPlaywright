import { Page } from'@playwright/test';

export class LoginPage{

   page:Page
    //empty User define variable which of type page{PW}
    //Varaiable:Interface{PW}

    constructor(page:Page){
        this.page=page
    }

async loadUrl(){
await this.page.goto("http://leaftaps.com/opentaps/control/main")
}

async enterUsername(){
    await this.page.fill("#username","Demosalesmanager")
}

async enterPassword(){
    await this.page.fill("#password","crmsfa")  
}

async clickLoginButton(){
    await this.page.click(".decorativeSubmit")      
}






}