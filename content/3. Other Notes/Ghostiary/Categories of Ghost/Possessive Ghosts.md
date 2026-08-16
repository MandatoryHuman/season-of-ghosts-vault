---
publish: true
created: 2026-08-04T12:06:58.530Z
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
