---
publish: true
created: 2026-08-04T11:05:05.134Z
modified: 2026-08-02T14:07:53.394Z
published: 2026-08-02T14:07:53.394Z
aliases: []
tags: []
---

```dataview
TABLE WITHOUT ID
  file.link AS Ghost,
  aliases AS "Other Names",
  danger AS "Danger Level",
  cultural_origin AS "Cultural Origin"
FROM "3. Other Notes/Ghostiary/Types of Spirit"
WHERE ghost_category = "Bound Ghosts"
SORT file.name ASC
```
