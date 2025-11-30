import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{

async clickCRMFA(){
    await this.page.click("text=CRM/SFA")
}

async logout(){
     await this.page.click(".decorativeSubmit")

}


}