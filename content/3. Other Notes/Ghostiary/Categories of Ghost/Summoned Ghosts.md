---
publish: true
created: 2026-08-21T11:43:45.556Z
modified: 2026-08-16T08:15:41.138Z
published: 2026-08-16T08:15:41.138Z
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
