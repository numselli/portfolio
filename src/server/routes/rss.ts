import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const siteUrl = "https://numselli.xyz"
  
  const blogs = await queryCollection(event, "blogs").all()
  const projects = await queryCollection(event, "projects").all()

  const items = [
    ...blogs.map(p => ({
      title: p.title,
      description: p.description,
      url: `${siteUrl}${p.path}`,
      date: new Date(p.date),
      type: "blog",
      image: p.image
    })),
    ...projects.map(p => ({
      title: p.title,
      description: p.description,
      url: `${siteUrl}${p.path}`,
      date: new Date(p.date),
      type: "project",
      image: p.meta.thumbnail
    }))
  ].sort((a, b) => b.date.getTime() - a.date.getTime())


  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Your Site</title>
    <link>${siteUrl}</link>
    <description>Latest content</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

    ${items.map(item => `
      <item>
        <title>${item.title}</title>
        <link>${item.url}</link>
        <guid>${item.url}</guid>
        <pubDate>${item.date.toUTCString()}</pubDate>
        <category>${item.type}</category>

        <description>
          <p>${item.description || ""}</p>
          ${item.image ? `<img src="${siteUrl}${item.image}" />` : ""}
        </description>

        ${item.image ? `<media:content url="${siteUrl}${item.image}" medium="image" />` : ""}
      </item>
    `).join("")}
  </channel>
</rss>`

  setHeader(event, "content-type", "application/xml")
  return xml
})