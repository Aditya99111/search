const puppeteer = require("puppeteer");
document.getElementById("btn").addEventListener("click", scrapeResult);
function input_box(){
    var input_user = document.getElementById("input").value;
}
async function scrapeResult(url){
    const browser= await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(url);
    const[el] = await page.$x('//*[@id="rso"]/div[1]/div/div[1]/div/div[1]/div/div[1]/div/span/span')
    const txt =await el.getProperties("textContent")
    const rawText = await txt.jsonValue();
    console.log({rawText})
    browser.close()
}
scrapeResult("https://www.google.com/search?q=what+is+hello+world")
// function input_box(){
//     var input_user = document.getElementById("input").value;
//      window.open(`https://www.google.com/search?q=${input_user}`);
//      document.write(input_user)
// }