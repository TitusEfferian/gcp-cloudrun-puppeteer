const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/', async (req, res) => {
    (async () => {
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser',
            args:['--no-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto('https://google.com');
        const content = await page.content();
        await browser.close();
        res.send({
            success: true,
            message: content,
        });
    })();
});

app.listen(8080);
