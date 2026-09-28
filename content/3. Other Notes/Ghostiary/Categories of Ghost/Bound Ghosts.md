---
publish: true
created: 2026-09-26T17:27:30.710Z
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
