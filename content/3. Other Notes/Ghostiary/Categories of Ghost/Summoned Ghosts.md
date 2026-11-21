---
aliases: []
tags: []
---

```base
views:
  - type: table
    name: Summoned Ghosts
    filters:
      and:
        - ghost_category == "Summoned Ghosts"
    order:
      - file.name
      - aliases
      - danger

```
