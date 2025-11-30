import { WelcomePage } from "./WelcomePage";

export class MyHomePage extends WelcomePage{

async clickLeads(){
    await this.page.click("//a[text()='Leads']")
}

async clickContacts(){
    await this.page.click("//a[text()='Contacts']")
}


}