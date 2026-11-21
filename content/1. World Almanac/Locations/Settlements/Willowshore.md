---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-11-12T18:08:57.964Z
modified: 2026-09-26T16:33:31.799Z
published: 2026-09-26T16:33:31.799Z
>>>>>>> e53c10dad9e43696f43654316eadb0c3af1a2484
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

<<<<<<< HEAD
### Businesses 
```dataview
TABLE WITHOUT ID
link("/" + file.path, file.name) AS "Location", building_type AS "Type", owner AS "Owner/Manager"
FROM "1. World Almanac/Locations"
WHERE contains(tags, "shop") OR contains(tags, "inn") OR contains(tags, "teahouse") OR contains(tags, "mill") OR contains(tags, "herbalist") OR contains(tags, "fishery") OR contains(tags, "dock") OR contains(tags, "theatre") OR building_type = "Trade Office"
SORT file.name ASC
```
=======
### Businesses

| Location                                                                                                                   | Type         | Owner/Manager                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| [[1. World Almanac/Locations/Settlements/Willowshore/Eternal Blaze Ironworks.md\|Eternal Blaze Ironworks]]                 | Ironworks    | [[1. World Almanac/NPCs/Willowshore Citizens/Yong Wu-Xiu.md\|Yong Wu-Xiu]]                         |
| [[1. World Almanac/Locations/Settlements/Willowshore/Fisheries.md\|Fisheries]]                                             | Fishery      | [[1. World Almanac/NPCs/Willowshore Citizens/Zataku.md\|Zataku]]                                   |
| [[1. World Almanac/Locations/Settlements/Willowshore/Graveside Manners.md\|Graveside Manners]]                             | Cemetery     | [[1. World Almanac/NPCs/Willowshore Citizens/You So-Jin.md\|You So-Jin]]                           |
| [[1. World Almanac/Locations/Settlements/Willowshore/Milling Houses.md\|Milling Houses]]                                   | Mill         | [[1. World Almanac/NPCs/Willowshore Citizens/Choe Chung-hu.md\|Choe Chung-hu]]                     |
| [[1. World Almanac/Locations/Settlements/Willowshore/Mother's Coil.md\|Mother's Coil]]                                     | Shop         | [[1. World Almanac/NPCs/Willowshore Citizens/Igawa Jubei.md\|Igawa Jubei]]                         |
| [[1. World Almanac/Locations/Settlements/Willowshore/Second Best.md\|Second Best]]                                         | Shop         | [[1. World Almanac/NPCs/Willowshore Citizens/Huo Tian-Zhe.md\|Huo Tian-Zhe]]                       |
| [[1. World Almanac/Locations/Settlements/Willowshore/Seven-Coloured Songbird Theatre.md\|Seven-Coloured Songbird Theatre]] | Theatre      | [[1. World Almanac/NPCs/Willowshore Citizens/Kazuma Oono.md\|Kazuma Oono]]                         |
| [[1. World Almanac/Locations/Settlements/Willowshore/The Ceiba-Duyue Exchange.md\|The Ceiba-Duyue Exchange]]               | Trade Office | [[1. World Almanac/NPCs/Willowshore Citizens/Kim Gu-won.md\|Kim Gu-won]]                           |
| [[1. World Almanac/Locations/Settlements/Willowshore/The Cerulean Teahouse.md\|The Cerulean Teahouse]]                     | Teahouse     | None                                                                                               |
| [[1. World Almanac/Locations/Settlements/Willowshore/The Hand of Spring.md\|The Hand of Spring]]                           | Herbalist    | [[1. World Almanac/NPCs/Willowshore Citizens/Damihansig Mababangloob.md\|Damihansig Mababangloob]] |
| [[1. World Almanac/Locations/Settlements/Willowshore/The Leshy's Saloon.md\|The Leshy's Saloon]]                           | Teahouse     | [[1. World Almanac/NPCs/Willowshore Citizens/Mountain Summit Grass.md\|Mountain Summit Grass]]     |
| [[1. World Almanac/Locations/Settlements/Willowshore/The Mushroom House.md\|The Mushroom House]]                           | Black Market | [[1. World Almanac/NPCs/Willowshore Citizens/Luda Bama.md\|Luda Bama]]                             |
| [[1. World Almanac/Locations/Settlements/Willowshore/Thrice Blessed Inn.md\|Thrice Blessed Inn]]                           | Inn          | [[1. World Almanac/NPCs/Willowshore Citizens/Mother Otis.md\|Mother Otis]]                         |
| [[1. World Almanac/Locations/Settlements/Willowshore/Treesparrow's Rest.md\|Treesparrow's Rest]]                           | Shop         | [[1. World Almanac/NPCs/Willowshore Citizens/Nadoya Sanmi.md\|Nadoya Sanmi]]                       |
| [[1. World Almanac/Locations/Settlements/Willowshore/Willowshore Dock.md\|Willowshore Dock]]                               | Dock         | [[1. World Almanac/NPCs/Willowshore Citizens/Rajul Samudra.md\|Rajul Samudra]]                     |
| [[1. World Almanac/Locations/Settlements/Willowshore/Willowshore Stables.md\|Willowshore Stables]]                         | Stable       | [[1. World Almanac/NPCs/Willowshore Citizens/Kum Soon-chong.md\|Kum Soon-chong]]                   |
>>>>>>> e53c10dad9e43696f43654316eadb0c3af1a2484

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