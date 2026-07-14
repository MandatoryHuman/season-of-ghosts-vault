---
publish: true
title: Season of Ghosts Vault
created: 2026-07-14T00:28:54.644+01:00
modified: 2026-07-14T15:53:03.665+01:00
published: 2026-07-14T21:49:04.411+01:00
---

```base
filters:
  and:
    - file.path.startsWith("1. World Almanac/Locations/Settlements/Willowshore Locations")
views:
  - type: leaflet-map
    name: Willowshore-Map
    mapName: test
    image: z_assets/Maps/Willowshore.webp
    height: 400
    minZoom: -4
    maxZoom: 2
    defaultZoom: -3
    zoomDelta: 1
    scale: "1.5"
    unit: feet
  - type: table
    name: List

```

Featured pages:

- [[Willowshore]]
