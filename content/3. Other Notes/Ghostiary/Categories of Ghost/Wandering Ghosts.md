---
publish: true
created: 2026-08-21T11:43:45.559Z
modified: 2026-08-16T08:15:56.968Z
published: 2026-08-16T08:15:56.968Z
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
