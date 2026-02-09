import { getAssetThumbnailPath, getAlbumInfo } from "@immich/sdk";
import { defineEventHandler, getRouterParams } from "h3";
import { getImmichClient } from '~/server/utils/immich'

export default defineEventHandler(async (event) => {
    const conf = getImmichClient()
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
            thumbnail: `${conf.immichDomain}${getAssetThumbnailPath(a.id)}?c=${a.checksum}&apiKey=${conf.immichKey}`,
            preview: `${conf.immichDomain}${getAssetThumbnailPath(a.id)}?size=preview&c=${a.checksum}&apiKey=${conf.immichKey}`,
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