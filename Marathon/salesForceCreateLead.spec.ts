import { chromium, expect, test } from "@playwright/test";

test.use({
    storageState:"Data/salesforceLogin.json"
})

const baseURL = "https://orgfarm-e4ac807d98-dev-ed.develop.lightning.force.com/lightning/page/home"

test("Create Lead", async ({page}) => {    

    const randomNum = Math.floor(Math.random() * 10000);
    const firstName = "June"+randomNum;
    const lastName = "Johnny";
    const companyName = "XYZ";
    const oppurtunityName = "QAM";

    //Launch leaftaps application
    await page.goto(baseURL);

    //wait for the page to load and then click on it
    const appLauncher = page.getByRole("button", { name: "App Launcher" });
    await expect(appLauncher).toBeVisible({ timeout: 60000 });
    await appLauncher.click();
    await page.waitForTimeout(3000);

    //click on view all
    await page.getByLabel('View All Applications').click();
    await page.waitForTimeout(3000);

    //Type 'Marketing' in the search bar
    const appLauncherPopUp = page.locator('h2:has-text("App Launcher")');
    await expect(appLauncherPopUp).toBeVisible({ timeout: 60000 });
    //await page.waitForTimeout(8000);
    await page.getByPlaceholder("Search apps or items...").fill("Market");
    //await page.waitForTimeout(8000);

    //CLick on first item

    await page.locator("div[class='slds-truncate']").click();
    
    //wait for Leads link to load and click on it
    const leadsLink = page.locator("//a[@title='Leads']");
    await expect(leadsLink,"Leads link in Marketing page").toBeVisible({ timeout: 60000 });

    await leadsLink.click();

    //wait for leads page to load
    const leadsPage = page.locator("//h1[text()='Leads']");
    await expect(leadsPage,"Leads page").toBeVisible({timeout:60000});

    //Click on New button
    await page.getByRole('button', { name: 'New' }).click();

    //New leads form should be opened
    const newLeadsForm = page.locator('//h2[text()="New Lead"]');
    await expect(newLeadsForm,"New Leads Form").toBeVisible();

    //Select the Salutation as Mrs.
    await page.locator('[name="salutation"]').click();
    await page.getByText("Mrs.").click();

    //Type First name
    await page.getByPlaceholder('First Name').fill(firstName);

    //TYpe last name
    await page.getByPlaceholder('Last Name').fill(lastName);

    //Type Company name
    await page.locator('[name="Company"]').fill(companyName);

    //CLick on save
    await page.locator("button[name='SaveEdit']").click();

    //toastMessage.slds-text-heading--small.forceActionsText

    const leadSaveMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');
    await expect(leadSaveMessage,"Leads Successfully created").toBeVisible();

    //console.log(leadSaveMessage.innerText());
    const showMoreActions = page.locator("//span[text()='Show more actions']").last();
    await page.waitForTimeout(6000);
    await showMoreActions.click();

    await page.getByText('Convert', { exact: true }).click();

    //wait for COnvert lead form tobe  opened and conver it

    const convertLeadForm = page.getByText('Convert Lead');
    await expect(convertLeadForm,"Convert Lead form").toBeVisible();

    await page.getByTitle('Opportunity').click();
    await page.waitForTimeout(2000);
    // Wait until the textbox is editable (enabled)
    const opportunityTextbox = page.getByRole('textbox', { name: 'Opportunity Name *' });
    await expect(opportunityTextbox).toBeEditable({ timeout: 10000 });

    // Then fill the value
    await opportunityTextbox.fill(oppurtunityName);
    //click on convert
    await page.getByRole('button', { name: 'Convert' }).click();

    //VErify lead convertion message
    const leadConvertedMsg = page.getByText('Your lead has been converted');
    await expect(leadConvertedMsg,"Lead Converted Message").toBeVisible();

    await page.getByText('Go to Leads').click();

    //search for the converted lead and it should not appear
    await page.getByPlaceholder('Search this list...').fill(firstName);
    await page.getByPlaceholder('Search this list...').press('Enter');
    const searchedListItems =  page.getByText('Nothing to see here');

    await expect(searchedListItems,"No leads should appear after convert").toBeVisible();

    //Click on oppurtunities page and verify page display
    await page.locator("//a[@title='Opportunities']").click();

    const oppPage = page.locator("//h1[text()='Opportunities']");
    await expect(oppPage,"Oppurtunities page").toBeVisible();


    //search the oppurtunity name
    await page.getByPlaceholder('Search this list...').fill(oppurtunityName);
    await page.getByPlaceholder('Search this list...').press('Enter');
    await page.waitForTimeout(5000);
    //click on the oppurtunity
    const opportunity = page.locator(`//a[@title='${oppurtunityName}']`).first();
    await expect(opportunity).toBeVisible();
    await opportunity.click();


    const oppDetailsPage = page.getByText('Opportunity', { exact: true });
    await expect(oppDetailsPage,"Individual oppurtunity page").toBeVisible();

    const oppName = page.locator(`//a[text()='${firstName} ${lastName}']`);
    await expect(oppName,"Lead name in oppurtunity page").toBeVisible();


    
})

test.only("SalesForce Chatter",async({page})=>{

    const randomNum:number = Math.floor(Math.random() * 10000);
    const firstName:string = "April"+randomNum;
    const lastName:string = "James";
    const accountName:string = "Savings";
    const accountNumber:string = "987456124";
    const subject:string="Product Return Request";
    const description:string="Requesting a return for a defective product";
    await page.goto(baseURL);

    //wait for the page to load and then click on it
    const appLauncher = page.getByRole("button", { name: "App Launcher" });
    await expect(appLauncher).toBeVisible({ timeout: 60000 });
    await appLauncher.click();
    await page.waitForTimeout(3000);

    //click on view all
    await page.getByLabel('View All Applications').click();
    await page.waitForTimeout(3000);

    //Type 'Service' in the search bar
    const appLauncherPopUp = page.locator('h2:has-text("App Launcher")');
    await expect(appLauncherPopUp).toBeVisible({ timeout: 60000 });
    //await page.waitForTimeout(8000);
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    //CLick on first item

    await page.locator("div[class='slds-truncate']").first().click();
    
    //wait for Leads link to load and click on it
    const casesLink = page.locator("//a[@title='Cases']");
    await expect(casesLink,"Cases link in Service page").toBeVisible({ timeout: 60000 });

    await casesLink.click();

    //wait for cases page to load
    const casesPage = page.locator("//h1[text()='Cases']");
    await expect(casesPage,"Cases page").toBeVisible({timeout:60000});

    //Click on New button
    await page.getByRole('button', { name: 'New' }).click();

    //New Cases form should be opened
    const newLeadsForm = page.locator('//h2[text()="New Case"]');
    await expect(newLeadsForm,"New Cases Form").toBeVisible();

    await page.locator("//lightning-icon[@icon-name='utility:search']").first().click();
    await page.waitForTimeout(3000);
    await page.locator("//span[@title='New Contact']").click();
    
    //New Contacts form should be opened
    const newContactForm = page.locator('//h2[text()="New Contact"]');
    await expect(newContactForm,"New Contact Form").toBeVisible();

    //Select the Salutation as Mrs.
    await page.locator('[name="salutation"]').click();
    await page.getByText("Mrs.").click();

    //Type First name
    await page.getByPlaceholder('First Name').fill(firstName);

    //TYpe last name
    await page.getByPlaceholder('Last Name').fill(lastName);

    //CLick on save
    await page.locator("button[name='SaveEdit']").last().click();

    const contactToastMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');
    await expect(contactToastMessage,"Contact Successfully created").toBeVisible();

    await page.locator("//lightning-icon[@icon-name='utility:search']").first().click();
    await page.waitForTimeout(3000);
    await page.locator("//span[@title='New Account']").click();

    //New Accounts form should be opened
    const newAccountForm = page.locator('//h2[text()="New Account"]');
    await expect(newAccountForm,"New Account Form").toBeVisible();

    //Input account number and name
    await page.locator("//input[@name='Name']").fill(accountName);
    await page.locator("//input[@name='AccountNumber']").fill(accountNumber);

    //Select Rating as Hot
    await page.locator("//button[@aria-label='Rating']").click();
    await page.locator("//span[@title='Hot']").click();

    //CLick on save
    await page.locator("button[name='SaveEdit']").last().click();

    //verify toast message
    const accountToastMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');
    await expect(accountToastMessage,"Account Successfully created").toBeVisible();

    await page.waitForTimeout(3000);

     //Select Status as New
    await page.locator("//button[@aria-label='Status']").click();
    await page.locator("//*[@data-value='New' and @role='option']").click();

    //Select Priority as High
    await page.locator("//button[@aria-label='Priority']").click();
    await page.locator("//span[@title='High']").click();

    //Select Case Origin as Email
    await page.locator("//button[@aria-label='Case Origin']").click();
    await page.locator("//span[@title='Email']").click();

    // Fill in the Subject input field as ‘Product Return Request’
    await page.getByRole('textbox', { name: 'Subject' }).fill(subject);

    // Description input field as ‘Requesting a return for a defective product’  
    await page.getByLabel('Description').fill(description);

    //save
    await page.locator('button[name="SaveEdit"]').click();

    //Verify toast message
    const caseToastMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');
    await expect(caseToastMessage,"Case Successfully created").toBeVisible();

    //verify for the case details to be opened
    const caseDetailsPage = page.locator('records-entity-label:has-text("Case")');
    await expect(caseDetailsPage,"Case Details page").toBeVisible();

    //Edit status to Escalated
    await page.locator("//button[@title='Edit Status']").click();
    const caseStatus = page.locator("//button[@aria-label='Status']");
    await expect(caseStatus).toBeVisible();
    caseStatus.click();
    await page.locator("//*[@data-value='Escalated']").last().click();

    //click on save
    await page.locator('[name="SaveEdit"]').click();

    await page.waitForTimeout(3000);

    //Check saved status in Details and Updated sections
    const statusSaved = page.locator("//*[@slot='outputField' and text()='Escalated']");
    await expect(statusSaved,"Case status should be saved as Escalated").toBeVisible();

    const statusInUpdatedSection = page.locator("//*[@class='cuf-ftcFieldNewValue']");
    await expect(statusInUpdatedSection,"Case status in updated section").toHaveText("Escalated");

    await page.locator("//*[@class='cuf-media-right forceChatterOverflowActionMenu uiMenu']").first().click();
    await page.getByText('Like on Chatter').click();

    //Verify toast message
    const likeToastMessage = page.locator('.toastMessage.slds-text-heading--small.forceActionsText').first();
    await expect(likeToastMessage,"Post was Liked").toBeVisible();

    //click on Chatter tab
    await page.locator("//a[@title='Chatter']").click();
    await page.waitForTimeout(3000);

    const likedPostInChatter = page.locator("//*[@class='cuf-ftcFieldNewValue']").last();
    await expect(likedPostInChatter,"Liked post in Chatter section").toHaveText("Escalated");

})