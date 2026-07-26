---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-07-26T12:51:05.100+01:00
modified: 2026-07-25T15:01:29.295+01:00
published: 2026-07-25T15:01:29.295+01:00
>>>>>>> 66ad995992ccbce3229cc4102d7625d4d1cb7ea2
tags:
  - location/settlement
  - town
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

## Description

Willowshore is a remote, rural town situated in the haunted nation of Shenmen on the continent of Tian Xia. It is a tight-knit, highly superstitious community steeped in folklore. The locals are keenly aware of the monsters and spirits that haunt Shenmen, and they observe numerous rituals to ward off evil.

The town's calendar revolves around these protective traditions, the most famous being the [[Reenactment Festival]]. Held on the last day of spring, this massive feast involves townsfolk wearing paper masks and staging a mock-abduction ceremony. It is designed to trick malicious entities into believing the town is already haunted, theoretically keeping the residents safe as they transition into the humid summer months—a period locally dubbed the "season of ghosts".

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

# Locations in Willowshore

### Businesses 
```dataview
TABLE WITHOUT ID
link("/" + file.path, file.name) AS "Location", buildingtype AS "Type", owner AS "Owner/Manager"
FROM "1. World Almanac/Locations"
WHERE contains(tags, "shop") OR contains(tags, "inn") OR contains(tags, "teahouse") OR contains(tags, "mill") OR contains(tags, "herbalist") OR contains(tags, "fishery") OR contains(tags, "dock") OR contains(tags, "theatre") OR buildingtype = "Trade Office"
SORT file.name ASC
```

### Temples & Shrines
```dataview 
TABLE WITHOUT ID 
link("/" + file.path, file.name) AS "Location", choice(buildingtype, buildingtype, type) AS "Type", owner AS "Caretaker/Priest" FROM "1. World Almanac/Locations" WHERE contains(tags, "shrine") OR contains(tags, "church") OR contains(tags, "cemetery") OR type = "Monastery" OR buildingtype = "Shrine" OR buildingtype = "Church" OR buildingtype = "Cemetery" SORT file.name ASC
```

### Homes
```dataview 
TABLE WITHOUT ID 
link("/" + file.path, file.name) AS "Location", owner AS "Owner" 
FROM "1. World Almanac/Locations" 
WHERE buildingtype = "Residential" 
SORT file.name ASC 
```

---

>[!tip] The Eight Practices
>The people of Willowshore follow these eight bits of advice during the first several weeks of summer—the season of ghosts. These beliefs are primarily local superstitions, and their capacity to actually help in an encounter with any sort of malicious spirit is hotly debated. 
>1. Do not call a ghost a ghost. 
>2. Do not pat people on the head or shoulders. 
>3. Avoid entering bodies of water when a ghost is nearby. 
>4. Do not eat food that has two stick-like objects protruding from it. 
>5. Do not lean against walls during the day. 
>6. Do not whistle at night. 
>7. Do not leave laundry out at night. 
>8. If you hear someone call your name from behind you at night, do not turn around.