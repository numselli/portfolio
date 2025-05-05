import { defineEventHandler } from 'h3';
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

export default defineEventHandler(async () => {
    const feedFetch = await fetch('https://blog.numselli.xyz/?action=feed')
    if (feedFetch.status !== 200) return {error: true, code: feedFetch.status}
    const xml = await feedFetch.text()

    const { feed } = parser.parse(xml);

    return feed.entry.map(({title, published, id}) =>{
        return {
            title,
            published, 
            id
        }
    })
})