import { MyHomePage } from "./sf_homePage";

export class LeadsPage extends MyHomePage{



async clickNew(){
    await this.page.locator("//a[@title='New']").click();
    await this.page.waitForTimeout(5000);
}


}