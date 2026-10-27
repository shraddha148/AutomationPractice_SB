const { test, expect } = require('@playwright/test');

test('Test Login Page', async ({ page }) => {
  await page.goto("https://sqatools.in/dummy-booking-website/");

  await page.locator("//input[@value='radio_678']").click();
  await page.locator("//input[@name='firstname']").nth(0).fill("John");
  await page.locator("//input[@name='firstname']").nth(1).fill("Doe");
  await page.locator("//input[@name='birthday']").fill("2006-08-15");
  await page.locator("//input[@id='male']").click();
  await page.locator("#admorepass").selectOption("3");
  await page.locator("//td[text()='Hyderabad']/preceding-sibling::td/input[@type='checkbox']").click();
  
  await page.pause();

});

test.only('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })