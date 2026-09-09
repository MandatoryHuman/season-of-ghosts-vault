---
publish: true
created: 2026-08-21T11:43:45.553Z
modified: 2026-08-16T08:15:21.778Z
published: 2026-08-16T08:15:21.778Z
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
