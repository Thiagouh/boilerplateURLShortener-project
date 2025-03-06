const dns = require("dns").promises;

let urlDatabase = {};
let counter = 1;

async function shorterUrl(url) {
  try {
    const { hostname } = new URL(url);
    await dns.lookup(hostname);
    urlDatabase[counter] = url;
    console.log("URL Database after update:", urlDatabase);
    counter++;
    return { original_url: url, short_url: counter - 1 };
  } catch (err) {
    console.log("Error in shorterUrl", err);
    return { error: "invalid URL" };
  }
}

function redirect(id) {
  return urlDatabase[id] || null;
}

module.exports = { shorterUrl, redirect };
