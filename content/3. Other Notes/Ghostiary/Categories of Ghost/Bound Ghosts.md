---
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
