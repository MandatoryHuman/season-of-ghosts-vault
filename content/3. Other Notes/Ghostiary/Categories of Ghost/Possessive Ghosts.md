---
aliases: []
tags: []
---

```base
views:
  - type: table
    name: Possessive Ghosts
    filters:
      and:
        - ghost_category == "Possessive Ghosts"
    order:
      - file.name
      - aliases
      - danger

```
