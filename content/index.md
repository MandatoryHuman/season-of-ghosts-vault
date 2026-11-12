---
publish: true
<<<<<<< HEAD
title: Season of Ghosts Vault
banner: "[[SoG Banner.webp]]"
---

# Map of [[Willowshore]]
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

# Timeline
![[History of Willowshore.canvas]]
=======
title: Eukoria
created: 2026-11-12T17:24:16.914Z
modified: 2026-10-07T09:41:41.489Z
published: 2026-10-07T09:41:41.489Z
---

> [!quote] "Magic is not a force to be tamed but an equation written in the language of the four Essences. Follow the wheel and the universe will provide."

Welcome to Eukoria, a realm defined by strict cosmological duality, complex divine hierarchies, and the pervasive, often volatile nature of magic. It is a world where faith, law, and arcane traditions are deeply intertwined, and where historical schisms continue to shape the lives of its inhabitants.

# The Eukorian Calendar

The end of the War of Laws is year 0. Dates before it use **BW** (Before the War), while dates after it use **AW** (After the War). The present day is 116 AW.
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0

# The War of Laws

<<<<<<< HEAD
### Heroes of Willowshore
```base
views:
  - type: cards
    name: PCs
    filters:
      and:
        - file.folder == "1. World Almanac/PCs"
    image: note.npc_image
    cardSize: 200
=======
The heavens were torn apart by a cataclysmic celestial rebellion that ended in 0 AW. What began as a theological dispute over the rigid geometry of the divine hierarchy quickly devolved into a war of attrition that spilled directly onto mortal soil.

During the [[War of Laws]], Eukoria became the epicentre of divine collateral damage. The [[1. World Almanac/World/Gods & Divines/Greater Gods/Canonical Gods/index|Canonical Gods]] and the rebel forces of [[Lethos, God of Trickery]] clashed so violently here that their conflict boiled the oceans and permanently tore the physical fabric of the Universe.
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0

When the dust settled, the world was forever changed. The Twins had rewritten cosmological law so that Non-Canonical Gods could exist, but legal existence did not create acceptance: many mortals and Canonical Gods still regard those deities as wrong and unlawful. The mortal world must also navigate dead-magic zones, warped landscapes, and volatile regions where the fundamental essences of reality still bleed into one another.

<<<<<<< HEAD
### Factions and Organisations
```base
views:
  - type: table
    name: Factions
    filters:
      and:
        - file.folder == "1. World Almanac/Factions"
    order:
      - file.name
      - leader
    markers: none
=======
# Directory

## Core Lore & Mechanics
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0

- [[Fundamental Essences]] - The building blocks of reality (Life, Spirit, Mind, Matter).
- [[Basic Essences]] - The absolute anchors of the void (Presence and Absence).
- [[Traditions of Magic]] - The sanctioned, harmonious spellcasting traditions.
- [[Traditions of Dismagic]] - The forbidden, volatile magic born of cosmic friction.

### [[1. World Almanac/World/Gods & Divines/Greater Gods/index|Greater Gods]]

## Geography & Nations

<<<<<<< HEAD
### Temples & Shrines
```base
filters:
  and:
    - file.folder == "1. World Almanac/Locations/Settlements/Willowshore"
    - file.tags.contains("shrine")
views:
  - type: cards
    name: Grid
    image: note.symbol
    imageFit: contain
=======
### Continents

- [[Antora]] (West)
- [[Cenora]] (East)
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0

### Nations

<<<<<<< HEAD
### Businesses 
```base
filters:
  and:
    - file.folder == "1. World Almanac/Locations/Settlements/Willowshore"
    - file.tags.contains("location/business")
formulas:
  Building Type: building_type
  Owner: owner
views:
  - type: table
    name: Businesses
    order:
      - file.name
      - formula.Building Type
      - formula.Owner
    columnSize: {}
=======
![[1. World Almanac/World/Locations/Eukoria/States/List of States.base]]

### Notable Locations:
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0

- [[God-Scar Strait]]: The treacherous, highly-trafficked choke-point between the continents.

<<<<<<< HEAD
### Houses
```base
filters:
  and:
    - file.folder == "1. World Almanac/Locations/Settlements/Willowshore"
    - file.tags.contains("residential")
formulas:
  Owner: owner
views:
  - type: table
    name: Residential
    order:
      - file.name
      - formula.Owner

```

---
>[!tip] Five Tips for Tian Xia
>#### Celestials aren't always good
>Most [Avistani](https://pathfinderwiki.com/wiki/Avistan) are familiar with the departure of [Asmodeus](https://pathfinderwiki.com/wiki/Asmodeus) from Heaven, a migration that changed him and his followers into devils. The dichotomy between righteous celestials and profane fiends is thus often taken for granted and further enforced by dramatic tales of angels falling from grace. In Tian Xia, a celestial’s behaviour has little to do with their status as a creature of Heaven. Even a banished godling or a drunken priest can still conjure incredible sacred powers.
>#### Appearances are deceiving
>Shapeshifters abound in Tian Xia, and no one can be certain if a priest or merchant they’re talking to is really who they seem to be. Kitsune move through cities wearing human faces, tanuki hide as teakettles or statues, and rats who snatch a stray fingernail can turn into someone’s doppelganger. Even Tian Xia’s goblins, known as [[Dokkaebi]], are known to transform into other forms, often appearing as attractive but troublesome members of other ancestries.
>#### Dragons aren't monsters
>Heroic tales of [Taldan](https://pathfinderwiki.com/wiki/Taldor) knights facing down dragons are common entertainment in [Avistan](https://pathfinderwiki.com/wiki/Avistan) - but in Tian Xia, dragons aren’t massive beasts to slay. They’re people, just like humans, [[Nagaji]], [[Tengu]], [[Elf|Elves]], and others who live upon the continent. They’ve served as rulers, advisors, guardians, and spiritual leaders across history, and they’re chosen agents of the [Empress of Heaven](https://pathfinderwiki.com/wiki/Shizuru). If a Tian person comes into conflict with a dragon, their first thought usually isn’t how to kill it, but how to negotiate with it.
>#### Spirits aren't abstract
>Elsewhere in the world, spirits are often insubstantial and thus remain out of mind for the average person. Those who know how to call to these strange entities can wield incredible power, but most will never see a spirit beyond a stray leshy or a summoned eidolon. In Tian Xia, [[Kami]] walk the forests, Anito teem in the jungles, and [[Yaksha|Yakshas]] help in the villages—tangible beings that feel very real. Offending the spirit of a river is much more serious when that river spirit might manifest as a dragon in response!
>#### The dead are never truly gone
>In many philosophies, a soul is judged by [Pharasma](https://pathfinderwiki.com/wiki/Pharasma), then moves on to its final reward. In Tian Xia, ancestors linger, watching their family and affecting their fortunes. Village heroes can straddle the line between ghost and god; sages who cultivate their spirit can even transcend mortality. The [Celestial Court](https://pathfinderwiki.com/wiki/Celestial_Court) of Tian Xia also offers a different path for those who choose it: reincarnation. Much like history, souls move around the universe in circles, and death isn’t always a permanent ending.
=======
### Characters & Factions
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0
