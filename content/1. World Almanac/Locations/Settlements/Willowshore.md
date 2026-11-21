---
aliases: []
tags:
  - location/settlement
  - location/settlement/town
region: "[[Shenmen]]"
ruler: "[[Heh Shan-Bao]]"
population: "225"
show_eight_practices: true
settlement_type: Town
---
> [!info]+ Settlement Details
> **Type:** `=this.settlement_type`
> **Region:** `=this.region`
> **Leadership:** `=this.ruler`
> **Population:** `=this.population`

## Description

Willowshore is a remote, rural town situated in the haunted nation of Shenmen on the continent of Tian Xia. It is a tight-knit, highly superstitious community steeped in folklore. The locals are keenly aware of the monsters and spirits that haunt Shenmen, and they observe numerous rituals to ward off evil.

The town's calendar revolves around these protective traditions, the most famous being the [[Reenactment Festival]]. Held on the last day of spring, this massive feast involves townsfolk wearing paper masks and staging a mock-abduction ceremony. It is designed to trick malicious entities into believing the town is already haunted, theoretically keeping the residents safe as they transition into the humid summer months—a period locally dubbed the "season of ghosts".

```base
filters:
  and:
    - file.path.startsWith("1. World Almanac/Locations/Settlements/Willowshore")
views:
  - type: leaflet-map
    name: Willowshore-Map
    mapName: Willowshore-Map
    image: z_assets/Maps/Willowshore.webp
    height: 400
    minZoom: -3.5
    maxZoom: 2
    defaultZoom: -3
    zoomDelta: 1
    scale: "1.5"
    unit: feet
```

# Locations in Willowshore

### Businesses 
```dataview
TABLE WITHOUT ID
link("/" + file.path, file.name) AS "Location", building_type AS "Type", owner AS "Owner/Manager"
FROM "1. World Almanac/Locations"
WHERE contains(tags, "shop") OR contains(tags, "inn") OR contains(tags, "teahouse") OR contains(tags, "mill") OR contains(tags, "herbalist") OR contains(tags, "fishery") OR contains(tags, "dock") OR contains(tags, "theatre") OR building_type = "Trade Office"
SORT file.name ASC
```

### Temples & Shrines
```dataview 
TABLE WITHOUT ID 
link("/" + file.path, file.name) AS "Location", choice(building_type, building_type, type) AS "Type", owner AS "Caretaker/Priest" FROM "1. World Almanac/Locations" WHERE contains(tags, "shrine") OR contains(tags, "church") OR contains(tags, "cemetery") OR type = "Monastery" OR building_type = "Shrine" OR building_type = "Church" OR building_type = "Cemetery" SORT file.name ASC
```

### Homes
```dataview 
TABLE WITHOUT ID 
link("/" + file.path, file.name) AS "Location", owner AS "Owner" 
FROM "1. World Almanac/Locations" 
WHERE building_type = "Residential" 
SORT file.name ASC 
```

---

![[Willowshore.webp]]