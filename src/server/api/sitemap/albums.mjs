import { getAllAlbums, init } from "@immich/sdk";
import { defineEventHandler } from "h3";
import { getImmichClient } from '~/server/utils/immich'

export default defineEventHandler(async () => {
    getImmichClient()
    const albums = await getAllAlbums({"shared": true})

    return albums.map(a => {
        return {
            loc: `/albums/${a.id}`,
			_sitemap: 'albums',
        }
    })
});