//Get html from a website

import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

// const url = 'https://www.proshop.dk/Baerbar-computer';

// const response = await fetch(url);
// const result = await response.text();

// fs.writeFileSync('index.html', result);

const htmlPageString = fs.readFileSync('index.html').toString();

import { load } from 'cheerio';

const $ = load(htmlPageString);

$("#products [product]").each((index, element) => {
    const name = $(element).find(".site-product-link h2").text();
    const description = $(element).find(".site-product-link").text();
    const price = $(element).find(".site-currency-lg").text();

    console.log(name);
    console.log(price);
    console.log("======")
}   );