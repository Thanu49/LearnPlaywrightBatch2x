let name="thanu";
let fullname=`hi ${name} how are you`;
console.log(fullname);

const testc="checkout"
const time=Date.now();
await page.screenshot({path:`screenshot/${testc}_${time}.png`});