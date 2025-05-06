import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { XMLParser } from 'fast-xml-parser';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';

const parser = new XMLParser();

const articles = defineEventHandler(async () => {
    const feedFetch = await fetch('https://blog.numselli.xyz/?action=feed');
    if (feedFetch.status !== 200) return {error: true, code: feedFetch.status}
    const xml = await feedFetch.text();

    const { feed } = parser.parse(xml);

    return feed.entry.map(({title, published, id}) =>{
        return {
            title,
            published, 
            id
        }
    })
});

export { articles as default };
//# sourceMappingURL=articles.mjs.map
