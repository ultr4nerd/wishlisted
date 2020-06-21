const functions = require('firebase-functions');
const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');
const scrapper = require('./scrapper');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(req.query.url, { waitUntil: 'domcontentloaded' });

  await page.setCacheEnabled(false);
  const data = await page.evaluate(scrapper);

  await browser.close();
  res.json({ data });
});

exports.getWish = functions.https.onRequest(app);
