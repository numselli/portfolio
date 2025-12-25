import { getAllAlbums, getAssetThumbnailPath, init } from "@immich/sdk";
import { defineEventHandler } from "h3";
import { useRuntimeConfig } from '#imports';

const {public: publicConfig} = useRuntimeConfig()
init({ baseUrl: publicConfig.immichDomain, apiKey: publicConfig.immichKey });

export default defineEventHandler(async () => {
    const albums = await getAllAlbums({"shared": true})

    const outs = await Promise.all(albums.map(async al=>{        
        return {
            albumName: al.albumName,
            description: al.description,
            thumbnail: `${publicConfig.immichDomain}${getAssetThumbnailPath(al.albumThumbnailAssetId)}?apiKey=${publicConfig.immichKey}&size=preview`,
            updatedAt: al.updatedAt,
            id: al.id,
            assetCount: al.assetCount
        }
    }))

    return outs
});