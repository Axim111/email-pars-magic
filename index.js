import puppeteer from 'puppeteer';



function waitFor(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
try {

  var main = (async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      defaultViewport: false,
    });
    const page = await browser.newPage();
    let mass = ["https://kwork.ru/projects", "https://1secmail.ru/ru", "https://vk.com/feed"]
    for (let item of mass) {
      console.log(item)
      await page.goto(item, { waitUntil: "load" })
      console.log(await page.content());
    }



  })
}
catch (err) {
  console.log(err)
}

main()