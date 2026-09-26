---
publish: true
created: 2026-09-26T16:58:19.978Z
modified: 2026-09-21T11:46:40.786Z
published: 2026-09-21T11:46:40.786Z
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
