Browser = require('zombie');
 
browser = new Browser()
browser.visit("http://www.google.com", function () {
 
  console.log(browser.text("title"));
 
});