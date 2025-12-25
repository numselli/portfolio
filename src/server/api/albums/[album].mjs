import { getAssetThumbnailPath, getAlbumInfo, init } from "@immich/sdk";
import { defineEventHandler, getRouterParams } from "h3";
import { useRuntimeConfig } from '#imports';

const {public: publicConfig} = useRuntimeConfig()
init({ baseUrl: publicConfig.immichDomain, apiKey: publicConfig.immichKey });

export default defineEventHandler(async (event) => {
    const path = getRouterParams(event);
    if (!path.album) return;

    const {assets} = await getAlbumInfo({id:path.album})
        
    return assets.map(a=>{
        return {
            tags: a.tags,
            id: a.id,
            createdAt: a.createdAt,
            type: a.type,
            originalFileName: a.originalFileName,
            thumbnail: `${publicConfig.immichDomain}${getAssetThumbnailPath(a.id)}?c=${a.checksum}&apiKey=${publicConfig.immichKey}`,
            preview: `${publicConfig.immichDomain}${getAssetThumbnailPath(a.id)}?size=preview&c=${a.checksum}&apiKey=${publicConfig.immichKey}`,
            fileCreatedAt: a.fileCreatedAt,
            fileModifiedAt: a.fileModifiedAt,
            updatedAt: a.updatedAt,
            exifInfo: a.exifInfo,
            people: a.people,
            hasMetadata: a.hasMetadata,
            duplicateId: a.duplicateId,
        }
    }) 
});