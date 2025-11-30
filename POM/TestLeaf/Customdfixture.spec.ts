import {test  as base} from '@playwright/test';

//export const test=base.ectend<{page:any}>({
export const cfixture = base.extend<{login: any}>({

    // Define the fixture
    login: async( { page }, use)=>{
        await page.goto("https://login.salesforce.com/?locale=in")
        await page.fill("#username","dilipkumar.rajendran@testleaf.com")
        await page.fill("#password","TestLeaf@2025")
        await page.click("#Login")
        await use(page)
       
    }


})