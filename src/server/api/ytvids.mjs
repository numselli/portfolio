import { XMLParser } from "fast-xml-parser";
import { defineEventHandler } from "h3";

const parser = new XMLParser({
    ignoreAttributes: false
});

const rssParser = async(feedUrl) => {
    const req = await fetch(feedUrl, {
        headers: {
            'User-Agent': 'rss-parser',
            'Accept': 'application/rss+xml'
        }
    })

    if (req.status !== 200) return {error: true, code: req.status}

    const xml = await req.text()
    const { feed } = parser.parse(xml);

    return feed.entry.map(item => {
        return {
            title: item.title,
            image: item['media:group']['media:thumbnail']['@_url'],
            url: `https://youtu.be/${item['yt:videoId']}`,
            date: item.published
        }
    })
}

// const loadFeed = async () => {
//     const feed = await rssParser(`https://www.youtube.com/feeds/videos.xml?channel_id=UCgXvOi8pKvezUO3bb4CqeiQ`);
//     return feed.slice(0, 3)
// }

// let rssFeed = await loadFeed();
// let lastFetchDate = new Date().getTime()
let rssFeed = []
export default defineEventHandler(async () => {
    // const currTime = new Date().getTime()
    // if ((lastFetchDate-currTime)>=86400000) {
    //     const feed = await loadFeed();
    //     rssFeed = feed
    //     lastFetchDate = currTime
    //     return feed
    // }

    return rssFeed
});