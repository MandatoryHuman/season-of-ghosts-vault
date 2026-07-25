---
aliases: []
tags: []
---
Tì Shēn Ghosts are those that are bound to the location of their unnatural death, and must perfom a process known as Tì Shēn to escape. This process involves luring a living person to die in the same way they did.

```dataview
TABLE WITHOUT ID
  "[[" + file.name + "]]" AS Ghost,
  aliases AS "Other Names",
  danger AS "Danger Level", 
  cultural_origin AS "Cultural Origin"
FROM "3. Other Notes/Amaya's Ghostiary/Types of Spirit"
WHERE ghost_category = "Bound Ghosts"
SORT file.name ASC
```
