import { test, chromium, expect,ElementHandle,Page, request, } from "@playwright/test";
import Env from "../utills/environment";


test('JS Handle', async()=>{
    const browser = await chromium.launch({
       headless : false
   })
   const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(Env.sanBoxLink) 

        await page.click(Env.jsDelay)

         const startbtn = await page.click(Env.startbutton);
         const textvalue1 = await page.evaluateHandle(Env.textValue)
        // console.log(textvalue1)


         await page.evaluate(() => {
         // expect(textvalue1).toContain('Liftoff!')
            return new Promise((resolve) => setTimeout(resolve, 11000));
          });
          expect(textvalue1).toBeTruthy('Liftoff!')

        })
         // await page.textContent(Env.textValue);
          // expect(delay1).toContain('Liftoff!')
   
   
   
   
    // const startbtn = await page.click(Env.startbutton);
    //         const delay1=await page.locator(Env.textValue).textContent()
   
    //        // const textvalue1 = await page.evaluateHandle(Env.textValue)
    //        // console.log(textvalue1)
   
   
    //        //  await page.evaluate(() => {
    //        // return  Promise.resolve(()=>{setTimeout(() => {
    //        //   expect(delay1).toContain('Liftoff!')
    //        // }, 11000);})
    //        await page.textContent(Env.textValue);
    //       // expect(delay1).toContain('Liftoff!')
    //           return new Promise((resolve) => setTimeout(resolve, 13000));
              
   

























         
        //  const windowHandle = await page.evaluateHandle(() => window);
        // console.log(aHandle.getAttribute);
        // console.log(windowHandle.isVisible);

       
//         const handle = await page.evaluateHandle(() => ({window, document}));
// const properties = await handle.getProperties();
// const windowHandle = properties.get('window');
// const documentHandle = properties.get('document');
// await handle.dispose();


