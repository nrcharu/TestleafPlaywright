import { chromium, expect, test } from "@playwright/test";

test.use({
    storageState:"Data/salesforceLogin.json"
})

test("Create Account", async ({page}) => {  

    //Launch Salesforce application
    const baseURL:string = "https://orgfarm-e4ac807d98-dev-ed.develop.lightning.force.com/lightning/page/home";
    const accountName:string = "Primary"
    await page.goto(baseURL);

    //verify title of the page
    await expect(page,"Verify page title").toHaveTitle("Home | Salesforce");

    //verify page url
    await expect(page,"Verify page url").toHaveURL(baseURL);

    //Click app launcher by class
    const appLauncher = page.locator(".slds-icon-waffle");
    await expect(appLauncher).toBeVisible({ timeout: 60000 });
    await appLauncher.click();

    //Click on View All by getByText
    await page.getByText('View All', { exact: true }).nth(1).click();

    //Wait for Search apps to appear and search for service using getByPlaceholder
    const searchAppTextBox = page.getByPlaceholder("Search apps or items...");
    await expect(searchAppTextBox,"Search apps text box").toBeVisible();
    await searchAppTextBox.fill("Service");

    //Click on Service using index based xpath
    await page.locator("(//mark[text()='Service'])[1]").click();

    //Wait for page load and Accounts link to be visible and then click it. Find in using
    //attribute based css selector
    const accountsLink = page.locator('span.slds-truncate:has-text("Accounts")');
    await expect(accountsLink,"Accounts Link to be visible").toBeVisible();
    accountsLink.click();

    //wait for Accounts page to open
    const accountsPageHeader = page.locator("//h1[text()='Accounts']");
    await expect(accountsPageHeader,"Accounts page to be visible").toBeVisible();

    //click on New using getByRole
    await page.getByRole('button', { name: 'New' }).click();

    //wait for account form to be opened
    const accountFormHeader = page.getByText('Account Information');
    await expect(accountFormHeader,"Accounts form to be visible").toBeVisible();

    //Enter account name using attribute based css selector
    await page.locator('input.slds-input[name="Name"]').fill(accountName);

    //click on save button
    await page.locator("button[name='SaveEdit']").click();

    //toastMessage slds-text-heading--small forceActionsText
    const toastMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');
    await expect(toastMessage,"verify toast message").toContainText("Account");
    await expect(toastMessage,"verify toast message").toContainText("was created");




})
