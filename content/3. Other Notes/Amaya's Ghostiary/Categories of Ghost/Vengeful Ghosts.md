---
<<<<<<< HEAD
=======
publish: true
created: 2026-07-26T14:04:36.114+01:00
modified: 2026-07-26T11:40:38.748+01:00
published: 2026-07-26T11:40:38.748+01:00
>>>>>>> 0869b683792553e76b22e89c628c9ed9aa64144a
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
