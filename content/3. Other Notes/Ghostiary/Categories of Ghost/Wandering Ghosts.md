---
publish: true
created: 2026-09-29T15:34:33.407Z
modified: 2026-09-21T11:46:40.787Z
published: 2026-09-21T11:46:40.787Z
aliases: []
tags: []
---

```base
views:
  - type: table
    name: Wandering Ghosts
    filters:
      and:
        - ghost_category == "Wandering Ghosts"
    order:
      - file.name
      - aliases
      - danger

```
