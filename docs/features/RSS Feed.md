Quartz emits an RSS feed for all the content on your site by generating an `index.xml` file that RSS readers can subscribe to. Because of the RSS spec, this requires the `baseUrl` property in your [[configuration]] to be set properly for RSS readers to pick it up properly.

If you open the feed URL directly in a browser, it will usually render as raw XML and may show a message like "This XML file does not appear to have any style information associated with it." That is expected. RSS feeds are meant to be consumed by feed readers, not styled like HTML pages.

> [!info]
> After deploying, the generated RSS link will be available at `https://${baseUrl}/index.xml` by default.
>
> The `index.xml` path can be customized by passing the `rssSlug` option to the [[ContentIndex]] plugin.

## Configuration

This functionality is provided by the [[ContentIndex]] plugin. See the plugin page for customization options.
