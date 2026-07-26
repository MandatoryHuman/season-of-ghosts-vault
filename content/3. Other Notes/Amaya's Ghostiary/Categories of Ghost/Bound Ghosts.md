---
<<<<<<< HEAD
=======
publish: true
created: 2026-07-26T12:51:05.236+01:00
modified: 2026-07-26T11:40:29.395+01:00
published: 2026-07-26T11:40:29.395+01:00
>>>>>>> 66ad995992ccbce3229cc4102d7625d4d1cb7ea2
aliases: []
tags: []
---
```dataview
TABLE WITHOUT ID
  link(replace(file.path, "3. Other Notes/", ""), file.name) AS Ghost,
  aliases AS "Other Names",
  danger AS "Danger Level", 
  cultural_origin AS "Cultural Origin"
FROM "3. Other Notes/Amaya's Ghostiary/Types of Spirit"
WHERE ghost_category = "Bound Ghosts"
SORT file.name ASC
```
