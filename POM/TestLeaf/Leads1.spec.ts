import test from '@playwright/test'
import { MyHomePage } from './MyHomePage'

test("Click on Leads",async({page})=>{

const mhp=new MyHomePage(page)
await mhp.loadUrl()
await mhp.enterUsername()
await mhp.enterPassword()
await mhp.clickLoginButton()
await mhp.clickCRMFA()
await mhp.clickLeads()
})












