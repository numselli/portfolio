import { getAllAlbums, getAssetThumbnailPath } from "@immich/sdk";
import { defineEventHandler } from "h3";
import { getImmichClient } from '~/server/utils/immich'

export default defineEventHandler(async () => {
    const conf = getImmichClient()
    const albums = await getAllAlbums({"shared": true})

    const outs = await Promise.all(albums.map(async al=>{        
        return {
            albumName: al.albumName,
            description: al.description,
            thumbnail: `${conf.immichDomain}${getAssetThumbnailPath(al.albumThumbnailAssetId)}?apiKey=${conf.immichKey}&size=preview`,
            updatedAt: al.updatedAt,
            id: al.id,
            assetCount: al.assetCount
        }
    }))

    return outs
});