const { shorterUrl, redirect } = require("../services/urlService");

async function createShortUrl(req, res) {
  const receivedURL = req.body.url;
  const response = await shorterUrl(receivedURL);
  res.json(response);
}

function getShortUrl(req, res) {
  const receivedID = req.params.id;
  const url = redirect(receivedID);
  if (url) {
    res.redirect(url);
  } else {
    res.json({ error: "No short URL found for the given input" });
  }
}

module.exports = { createShortUrl, getShortUrl };
