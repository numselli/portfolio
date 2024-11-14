import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import Parser from 'rss-parser';
import 'lru-cache';
import 'devalue';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'github-slugger';
import 'ipx';

let parser = new Parser();

const articles = defineEventHandler(async () => {
    const feed = await parser.parseURL('https://blog.numselli.xyz/?action=feed');

    return feed.items.slice(0, 3)
});

export { articles as default };
//# sourceMappingURL=articles.mjs.map
