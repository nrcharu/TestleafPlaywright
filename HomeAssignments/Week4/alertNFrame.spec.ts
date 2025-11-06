import {expect, test} from "@playwright/test";

test("Alert verification", async({page})=>{    

    const baseURL:string = "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm";
    
    page.on('dialog',alertType=>{
        const type= alertType.type();
        console.log("The alert type is :"+type);
        console.log("Alert message is :",alertType.message());
        if(type==="alert" ||type==="confirm" ){
            alertType.accept();
        }else {
            alertType.accept("this is the input to alert messsage");
        }
       
    })
    await page.goto(baseURL); 
    const iframe = page.frame({ name: 'iframeResult' });   
    await iframe?.locator("//button[text()='Try it']").click();
    await page.waitForTimeout(3000);
    const textAlert = await iframe?.locator("#demo").innerText();
    console.log(textAlert);
    expect(textAlert,"Text after accepting the alert").toBe("You pressed OK!");
})