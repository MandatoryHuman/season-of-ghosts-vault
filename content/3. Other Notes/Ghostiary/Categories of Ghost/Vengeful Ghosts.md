---
aliases: []
tags: []
---

```dataview
TABLE  WITHOUT ID
  file.link AS Ghost,
  aliases AS "Other Names",
  danger AS "Danger Level", 
  cultural_origin AS "Cultural Origin"
FROM "3. Other Notes/Ghostiary/Types of Spirit"
WHERE ghost_category = "Vengeful Ghosts"
SORT file.name ASC
```
