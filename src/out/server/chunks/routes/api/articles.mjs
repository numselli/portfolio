import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import Parser from 'rss-parser';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'node:crypto';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import 'node:url';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';

let parser = new Parser();

const articles = defineEventHandler(async () => {
    const feed = await parser.parseURL('https://blog.numselli.xyz/?action=feed');

    return feed.items.slice(0, 3)
});

export { articles as default };
//# sourceMappingURL=articles.mjs.map
