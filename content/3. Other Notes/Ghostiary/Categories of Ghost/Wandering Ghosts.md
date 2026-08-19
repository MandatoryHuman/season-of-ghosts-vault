---
publish: true
created: 2026-08-04T12:06:58.534Z
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
