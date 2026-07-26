---
<<<<<<< HEAD
=======
publish: true
created: 2026-07-26T12:51:05.239+01:00
modified: 2026-07-26T11:40:38.748+01:00
published: 2026-07-26T11:40:38.748+01:00
>>>>>>> 66ad995992ccbce3229cc4102d7625d4d1cb7ea2
aliases: []
tags: []
---
```dataview
TABLE  WITHOUT ID
  link(replace(file.path, "3. Other Notes/", ""), file.name) AS Ghost,
  aliases AS "Other Names",
  danger AS "Danger Level", 
  cultural_origin AS "Cultural Origin"
FROM "3. Other Notes/Amaya's Ghostiary/Types of Spirit"
WHERE ghost_category = "Vengeful Ghosts"
SORT file.name ASC
```
