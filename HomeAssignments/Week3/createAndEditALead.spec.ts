import { chromium, expect, test } from "@playwright/test";

test("Create Lead", async ({page}) => {

    //Initializing the test data
    const loginUserName:string = "Demosalesmanager";
    const loginPassword:string = "crmsfa";
    const companyName:string = "BNP Paribas";
    const firstName:string = "Abhimanyu";
    const lastName:string = "Arjun";
    const salutation:string = "Mr.";
    const title:string = "Investment Banking";
    const annualRevenue:string = "78900000";
    const department:string = "Finance";
    const phoneNumber:number = 9876543210;

    //Launch leaftaps application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // get login page text once
    const launchPageHeading = await page.locator("h2").innerText();

    //assert if leaftaps application is opening else log failure message
    expect(launchPageHeading,"Launching LeafTaps Login Page").toContain("Leaftaps Login");

    //Enter the username as 'Demosalesmanager'
    await page.locator('#username').fill(loginUserName);

    //Enter the password as 'crmsfa'
    await page.fill('#password',loginPassword); // this is another way
    //await page.locator('#password').fill('crmsfa'); 

    //Click on Login button
    await page.locator('.decorativeSubmit').click();

    // get demo page text once
    const loginPageHeading = await page.locator("h2").innerText();

    //Non-retrying assert if leaftaps Demo application is opening after login else log failure message
    expect(loginPageHeading,"Demo page after Login").toContain("Demo Sales Manager");

    //Click on CRMSFA
    await page.locator("//div[@for='crmsfa']").click();

    const demoHeading = await page.locator('b').innerText();

    //Non-retrying assert if demosalesmanager home page is logged in else log failure message
    expect(demoHeading,"Demo Sales Manager landing page").toContain('Demosalesmanager');

    //click on Create Lead
    await page.click("text=Create Lead")//locator("//a[text()='Create Lead']").click();

    
    //Auto-retrying assert if Create Lead form is opened 
    const createLeadSectionHeader = page.locator("//div[text()='Create Lead']");

    await expect(createLeadSectionHeader,"Create Lead form page").toBeVisible();

    //Enter Company name
    await page.fill('#createLeadForm_companyName',companyName);

    //Enter first name
    await page.fill('#createLeadForm_firstName',firstName);

    //Enter last name
    await page.fill('#createLeadForm_lastName',lastName);

    //Enter salutation
    await page.fill('#createLeadForm_personalTitle',salutation);

    //Enter Title
    await page.fill('#createLeadForm_generalProfTitle',title);

    //Enter Annual revenue
    await page.fill('#createLeadForm_annualRevenue',annualRevenue);

    //Enter Annual revenue
    await page.fill('#createLeadForm_departmentName',department);

    //Enter phonenumber
    await page.fill('#createLeadForm_primaryPhoneNumber',phoneNumber.toString());

    //Click on create lead button
    await page.getByRole('button', { name: 'Create Lead' }).click(); //using getByRole for practice

    //Auto-retrying assert if View Lead form is opened 
    const viewLeadSectionHeader = page.locator("//div[text()='View Lead']");

    await expect(viewLeadSectionHeader,"View Lead page after creating Lead").toBeVisible();

    //Auto-retrying assert Company name
    const actualCompanyName =  page.locator('#viewLead_companyName_sp');

    await expect(actualCompanyName,"CompanyName - Actual & Expected are same").toContainText(companyName);

    //Auto-retrying assert First name
    const actualFirstName =  page.locator('#viewLead_firstName_sp');

    await expect(actualFirstName,"First Name  - Actual & Expected are same").toHaveText(firstName);

    //Auto-retrying assert Last name
    const actualLastName =  page.locator('#viewLead_lastName_sp');

    await expect(actualLastName,"Last Name  - Actual & Expected are same").toHaveText(lastName);

    //Non-retrying assertion - Status
    const actualStatus =  await page.innerText('#viewLead_statusId_sp');

    expect(actualStatus,"Status of the created Lead is Assigned").toBe("Assigned");


})

test("Edit Lead", async ({page}) => {

    //Initializing the test data
    const loginUserName:string = "Demosalesmanager";
    const loginPassword:string = "crmsfa";
    const firstName:string = "Abhimanyu";
    const updateCompanyName:string = "SAFF";
    const updateAnnualRevenue:string = "123";
    const updateDescription:string = "This is a test lead update";
    const updateDepartment:string = "I.T";


     //Launch leaftaps application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // get login page text once
    const launchPageHeading = await page.locator("h2").innerText();

    //assert if leaftaps application is opening else log failure message
    expect(launchPageHeading,"Launching LeafTaps Login Page").toContain("Leaftaps Login");

    //Enter the username as 'Demosalesmanager'
    await page.locator('#username').fill(loginUserName);

    //Enter the password as 'crmsfa'
    await page.fill('#password',loginPassword); // this is another way
    //await page.locator('#password').fill('crmsfa'); 

    //Click on Login button
    await page.locator('.decorativeSubmit').click();

    // get demo page text once
    const loginPageHeading = await page.locator("h2").innerText();

    //Non-retrying assert if leaftaps Demo application is opening after login else log failure message
    expect(loginPageHeading,"Demo page after Login").toContain("Demo Sales Manager");

    //Click on CRMSFA
    await page.locator("//div[@for='crmsfa']").click();

    const demoHeading = await page.locator('b').innerText();

    //Non-retrying assert if demosalesmanager home page is logged in else log failure message
    expect(demoHeading,"Demo Sales Manager landing page").toContain('Demosalesmanager');

    //click on Leads
    await page.click("text=Leads");

    //click on Find Leads
    await page.click("//a[text()='Find Leads']");

    //Auto-retrying assert if Find Leads form is opened 
    const findLeadsSectionHeader = page.locator("//div[text()='Find Leads']");

    await expect(findLeadsSectionHeader,"Find Leads form page").toBeVisible();

    //ENter firstname
    await page.locator("//input[@name='firstName']").last().fill(firstName);

    //Click on find leads
    await page.getByRole('button',{name : 'Find Leads'}).click();

    await page.waitForTimeout(3000);

    //click on first lead
    await page.getByText(`${firstName}`, { exact: true }).first().click();

    //wait for View lead page to be displayed
    const viewLeadPageHeader = page.getByText('View Lead', { exact: true });
    await expect(viewLeadPageHeader,"View leads page").toBeVisible();

    //Click on Edit button
    await page.locator("//a[contains(@href,'updateLeadForm')]").click();

    //update company name
    await page.fill("#updateLeadForm_companyName",updateCompanyName);

    //update annual revenue
    await page.fill("#updateLeadForm_annualRevenue",updateAnnualRevenue);

    //update description
    await page.fill("#updateLeadForm_description",updateDescription);

    //update department
    await page.fill("#updateLeadForm_departmentName",updateDepartment);

    //click on update button
    await page.locator("//*[@value='Update']").click();

    //wait for View lead page to be displayed
    await expect(viewLeadPageHeader,"View leads page after edit").toBeVisible();

    //validate the details after editing
    const updatedCompanyname = page.locator('#viewLead_companyName_sp');
    await expect(updatedCompanyname,"Verify company name").toContainText(updateCompanyName);

    const updatedAnnualRevenue = page.locator('#viewLead_annualRevenue_sp');
    await expect(updatedAnnualRevenue,"Verify Annual Revenue").toContainText(updateAnnualRevenue);

    const updatedDepartment = page.locator('#viewLead_departmentName_sp');
    await expect(updatedDepartment,"Verify Department").toHaveText(updateDepartment);

    const updatedDescription = page.locator('#viewLead_description_sp');
    await expect(updatedDescription,"Verify Description").toHaveText(updateDescription);
})