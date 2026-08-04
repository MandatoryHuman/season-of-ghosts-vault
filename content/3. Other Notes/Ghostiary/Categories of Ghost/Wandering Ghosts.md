---
publish: true
created: 2026-08-04T11:05:05.138Z
modified: 2026-07-31T22:08:51.622Z
published: 2026-07-31T22:08:51.622Z
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
WHERE ghost_category = "Wandering Ghosts"
SORT file.name ASC
```
