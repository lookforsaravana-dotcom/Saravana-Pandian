import test, { chromium, firefox } from "@playwright/test";

test("Launch Browser", async () => {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.redbus.in/");
    //await page.screenshot({ path: "screenshot.png" });
    const title = await page.title();
    console.log("Page title is: " + title);
    const url = await page.url();
    console.log("Page URL is: " + url);
    await browser.close();
})

test("Launch Firefox Browser", async () => {
    const browser = await firefox.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.redbus.in/");
    const title = await page.title();
    console.log("Page title is: " + title);
    const url = await page.url();
    console.log("Page URL is: " + url);
    await browser.close();
})
