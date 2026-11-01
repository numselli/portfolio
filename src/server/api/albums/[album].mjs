import { getAssetThumbnailPath, searchAssets, getAlbumInfo } from "@immich/sdk";
import { defineEventHandler, getRouterParams } from "h3";
import { getImmichClient } from '~/server/utils/immich'

export default defineEventHandler(async (event) => {
    const conf = getImmichClient()
    const path = getRouterParams(event);
    if (!path.album) return;

    const al = await getAlbumInfo({id: path.album})

    const {assets} = await searchAssets({
        "metadataSearchDto": {
            "filter": {
                "albumIds": {
                    "any": [path.album]
                }
            },
            "withExif": true
        }
    })

    return {
        info: {
            albumName: al.albumName.replace("[Public]", ""),
            thumbnail: `${conf.immichDomain}${getAssetThumbnailPath(al.albumThumbnailAssetId)}?apiKey=${conf.immichKey}&size=preview`,
            description: al.description,
            updatedAt: al.updatedAt,
            assetCount: al.assetCount
        },
        assets: assets.items.map(a=>{
            return {
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
                hasMetadata: a.hasMetadata,
                duplicateId: a.duplicateId
            }
        }) 
    }
});