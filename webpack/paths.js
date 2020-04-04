const path = require('path');
const src = path.resolve(__dirname, "../src");

const paths = {
    PUBLIC_URL: process.env.PUBLIC_URL || '/',
    src: src,
    dist: path.resolve(__dirname, "../dist"),
    indexHtml: path.resolve(src, "index.html"),
    faviconIco: path.resolve(src, "favicon.ico"),
};

module.exports = paths;