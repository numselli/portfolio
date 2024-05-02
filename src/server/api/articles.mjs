import { defineEventHandler } from 'h3';
import Parser from 'rss-parser';

let parser = new Parser();

export default defineEventHandler(async () => {
    const feed = await parser.parseURL('https://blog.numselli.xyz/?action=feed');

    return feed.items.slice(0, 3)
})