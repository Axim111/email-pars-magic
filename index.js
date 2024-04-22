import puppeteer from 'puppeteer-extra';

puppeteer.use()

function waitFor(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

let main = (async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    defaultViewport: false,
  });


  const page = await browser.newPage();
  await page.goto("https://1secmail.ru/ru", { waitUntil: "load" })

  let inpu = ""
  let alred = ""
  try {
    while (!inpu) {

      waitFor(3000)
      if ((typeof (alred) == "string"))
        inpu = await (await page.waitForSelector(".custom-email-input"))
          .evaluate((node) => node.innerText)

      alred = await (await page.$(".custom-email-botton"))
        .evaluate((node) => node.getAttribute("disabled"))
      console.log(typeof (alred), typeof (inpu))

    }

  }

  catch (er) {
    console.error(er)
  }
  console.log(await inpu)

});
main();