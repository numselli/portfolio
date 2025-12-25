import { getAllAlbums, init } from "@immich/sdk";
import { defineEventHandler } from "h3";
import { useRuntimeConfig } from '#imports';

const {public: publicConfig} = useRuntimeConfig()
init({ baseUrl: publicConfig.immichDomain, apiKey: publicConfig.immichKey });

export default defineEventHandler(async () => {
    const albums = await getAllAlbums({"shared": true})

    return albums.map(a => {
        return {
            loc: `/albums/${a.id}`,
			_sitemap: 'albums',
        }
    })
});