import test from '@playwright/test'

import { LeadsPage } from './sf_leadsPage';


test("Click on Leads",async({page})=>{

const mhp=new LeadsPage(page);
await mhp.loadUrl();
await mhp.clickAppLauncher();
await mhp.selectLeads();
await mhp.clickNew();

})

