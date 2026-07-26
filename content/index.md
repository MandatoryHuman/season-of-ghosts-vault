---
publish: true
title: Season of Ghosts Vault
<<<<<<< HEAD
=======
created: 2026-07-26T12:51:04.482+01:00
modified: 2026-07-25T14:58:21.388+01:00
published: 2026-07-25T14:58:21.388+01:00
>>>>>>> 66ad995992ccbce3229cc4102d7625d4d1cb7ea2
banner: "[[SoG Banner.webp]]"
---
# Map of [[Willowshore]]
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
```

# Timeline
![[History of Willowshore.canvas]]

---

# Important Pages

### Heroes of Willowshore
- [[Otonashi Amaya]]
- [[Crimson Rosoideae]]

### Factions and Organisations
- [[Lung Wa|The Lung Wa Empire]]
- [[Northridgers]]
- [[Southbankers]]

### Ghost Guide
![[Amaya's Ghostiary]]

---

# Locations in Willowshore

### Businesses 
```dataview
TABLE WITHOUT ID
file.link AS "Location", buildingtype AS "Type", owner AS "Owner/Manager"
FROM "1. World Almanac/Locations"
WHERE contains(tags, "shop") OR contains(tags, "inn") OR contains(tags, "teahouse") OR contains(tags, "mill") OR contains(tags, "herbalist") OR contains(tags, "fishery") OR contains(tags, "dock") OR contains(tags, "theatre") OR buildingtype = "Trade Office"
SORT file.name ASC
```

### Temples & Shrines
```dataview 
TABLE WITHOUT ID file.link AS "Location", choice(buildingtype, buildingtype, type) AS "Type", owner AS "Caretaker/Priest" FROM "1. World Almanac/Locations" WHERE contains(tags, "shrine") OR contains(tags, "church") OR contains(tags, "cemetery") OR type = "Monastery" OR buildingtype = "Shrine" OR buildingtype = "Church" OR buildingtype = "Cemetery" SORT file.name ASC
```

### Homes
```dataview 
TABLE WITHOUT ID 
file.link AS "Location", owner AS "Owner" 
FROM "1. World Almanac/Locations" 
WHERE buildingtype = "Residential" 
SORT file.name ASC 
```

---

>[!tip] Five Tips for Tian Xia
>#### Celestials aren't always good
>Most [Avistani](https://pathfinderwiki.com/wiki/Avistan) are familiar with the departure of [Asmodeus](https://pathfinderwiki.com/wiki/Asmodeus) from Heaven, a migration that changed him and his followers into devils. The dichotomy between righteous celestials and profane fiends is thus often taken for granted and further enforced by dramatic tales of angels falling from grace. In Tian Xia, a celestial’s behaviour has little to do with their status as a creature of Heaven. Even a banished godling or a drunken priest can still conjure incredible sacred powers.
>#### Appearances are deceiving
>Shapeshifters abound in Tian Xia, and no one can be certain if a priest or merchant they’re talking to is really who they seem to be. Kitsune move through cities wearing human faces, tanuki hide as teakettles or statues, and rats who snatch a stray fingernail can turn into someone’s doppelganger. Even Tian Xia’s goblins, known as [[Dokkaebi]], are known to transform into other forms, often appearing as attractive but troublesome members of other ancestries.
>#### Dragons aren't monsters
>Heroic tales of [Taldan](https://pathfinderwiki.com/wiki/Taldor) knights facing down dragons are common entertainment in [Avistan](https://pathfinderwiki.com/wiki/Avistan)—but in Tian Xia, dragons aren’t massive beasts to slay. They’re people, just like humans, [[Nagaji]], [[Tengu]], [[Elf|Elves]], and others who live upon the continent. They’ve served as rulers, advisors, guardians, and spiritual leaders across history, and they’re chosen agents of the [Empress of Heaven](https://pathfinderwiki.com/wiki/Shizuru). If a Tian person comes into conflict with a dragon, their first thought usually isn’t how to kill it, but how to negotiate with it.
>#### Spirits aren't abstract
>Elsewhere in the world, spirits are often insubstantial and thus remain out of mind for the average person. Those who know how to call to these strange entities can wield incredible power, but most will never see a spirit beyond a stray leshy or a summoned eidolon. In Tian Xia, [[Kami]] walk the forests, Anito teem in the jungles, and [[Yaksha|Yakshas]] help in the villages—tangible beings that feel very real. Offending the spirit of a river is much more serious when that river spirit might manifest as a dragon in response!
>#### The dead are never truly gone
>In many philosophies, a soul is judged by [Pharasma](https://pathfinderwiki.com/wiki/Pharasma), then moves on to its final reward. In Tian Xia, ancestors linger, watching their family and affecting their fortunes. Village heroes can straddle the line between ghost and god; sages who cultivate their spirit can even transcend mortality. The [Celestial Court](https://pathfinderwiki.com/wiki/Celestial_Court) of Tian Xia also offers a different path for those who choose it: reincarnation. Much like history, souls move around the universe in circles, and death isn’t always a permanent ending.