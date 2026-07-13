---
aliases: []
tags:
  - location/settlement
region: "[[Shenmen]]"
ruler: "[[Heh Shan-Bao]]"
population: "225"
settlementtype: Town
---
> [!info]+ Settlement Details
> **Type:** `=this.settlementtype`
> **Region:** `=this.region`
> **Leadership:** `=this.ruler`
> **Population:** `=this.population`

```base
filters:
  and:
    - file.tags.contains("location")
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
    scale: "0.2"
    unit: km
  - type: table
    name: List

```

## Description

## Key Establishments

## Notable Residents
