---
publish: true
created: 2026-08-21T11:43:45.558Z
modified: 2026-08-16T08:15:49.646Z
published: 2026-08-16T08:15:49.646Z
aliases: []
tags: []
---

```base
views:
  - type: table
    name: Vengeful Ghosts
    filters:
      and:
        - ghost_category == "Vengeful Ghosts"
    order:
      - file.name
      - aliases
      - danger

```
