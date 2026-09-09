---
publish: true
created: 2026-08-21T11:43:45.550Z
modified: 2026-08-16T08:14:46.423Z
published: 2026-08-16T08:14:46.423Z
aliases: []
tags: []
---

```base
views:
  - type: table
    name: Bound Ghosts
    filters:
      and:
        - ghost_category == "Bound Ghosts"
    order:
      - file.name
      - aliases
      - danger

```
