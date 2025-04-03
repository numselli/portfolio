import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { f as fontEventHandler } from '../../../_/eventHandlers.mjs';
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
import 'unhead';
import 'unhead/server';

const font = defineEventHandler(fontEventHandler);

export { font as default };
//# sourceMappingURL=font.mjs.map
