import { LoginPage } from "./sf_loginPage";
import {expect} from '@playwright/test'

export class MyHomePage extends LoginPage{

async clickAppLauncher(){
    const appLauncher = this.page.getByRole("button", { name: "App Launcher" });
        await expect(appLauncher).toBeVisible({ timeout: 60000 });
        await appLauncher.click();
        await this.page.waitForTimeout(3000);
    
        //click on view all
        await this.page.getByLabel('View All Applications').click();
        await this.page.waitForTimeout(3000);
}

async selectLeads(){
    const appLauncherPopUp = this.page.locator('h2:has-text("App Launcher")');
    await expect(appLauncherPopUp).toBeVisible({ timeout: 60000 });
    //await page.waitForTimeout(8000);
    await this.page.getByPlaceholder("Search apps or items...").fill("Leads");

    await this.page.locator("//a[@data-label='Leads']").click();
    const leadsPage =  this.page.getByRole("heading",{name:"Leads"}).first();
    await expect(leadsPage,"Leads page").toBeVisible({timeout:60000});
}


}