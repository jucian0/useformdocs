import type {EntryContext} from 'remix'
import {isEqual} from 'lodash'
import {getDomainUrl, removeTrailingSlash, typedBoolean} from './../utils/misc'

async function getSitemapXml(request: Request, remixContext: EntryContext) {
  const domainUrl = getDomainUrl(request)

  function getEntry({route, lastmod, changefreq, priority}: any) {
    return `
<url>
  <loc>${domainUrl}${route}</loc>
  ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
  ${priority ? `<priority>${priority}</priority>` : ''}
</url>
  `.trim()
  }

  const rawSitemapEntries = (
    await Promise.all(
      Object.entries(remixContext.routeModules).map(async ([id, mod]) => {
        if (id === 'root') return
        if (id.startsWith('routes/_')) return
        if (id.startsWith('__test_routes__')) return

        const handle = mod.handle as any
        if (handle?.getSitemapEntries) {
          return handle.getSitemapEntries(request)
        }

        const manifestEntry = remixContext.manifest.routes[id]
        if (!manifestEntry) {
          console.warn(`Could not find a manifest entry for ${id}`)
          return
        }
        let parentId = manifestEntry.parentId
        let parent:any = parentId ? remixContext.manifest.routes[parentId] : null

        let path
        if (manifestEntry.path) {
          path = removeTrailingSlash(manifestEntry.path)
          // https://github.com/remix-run/remix/issues/307
        } else if (manifestEntry.index) {
          path = ''
        } else {
          return
        }

        while (parent) {
          // the root path is '/', so it messes things up if we add another '/'
          path = `${removeTrailingSlash(parent.path)}/${path}`
          parentId = parent.parentId
          parent = parentId ? remixContext.manifest.routes[parentId] : null
        }

        // we can't handle dynamic routes, so if the handle doesn't have a
        // getSitemapEntries function, we just
        if (path.includes(':')) return
        if (id === 'root') return

        const entry: any = {route: removeTrailingSlash(path)}
        return entry
      }),
    )
  )
    .flatMap(z => z)
    .filter(typedBoolean)

  const sitemapEntries: Array<any> = []
  for (const entry of rawSitemapEntries) {
    const existingEntryForRoute = sitemapEntries.find(
      e => e.route === entry.route,
    )
    if (existingEntryForRoute) {
      if (!isEqual(existingEntryForRoute, entry)) {
        console.warn(
          `Duplicate route for ${entry.route} with different sitemap data`,
          {entry, existingEntryForRoute},
        )
      }
    } else {
      sitemapEntries.push(entry)
    }
  }

  return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${sitemapEntries.map(entry => getEntry(entry)).join('')}
</urlset>
  `.trim()
}


export const sitemap = async (request: Request, remixContext: EntryContext) => {
  const xml = await getSitemapXml(request, remixContext)
  return new Response(xml, {
   headers: {
     'Content-Type': 'application/xml',
     'Content-Length': String(Buffer.byteLength(xml)),
   },
 })
}
