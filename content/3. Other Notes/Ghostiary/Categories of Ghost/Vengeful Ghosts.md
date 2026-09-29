---
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
