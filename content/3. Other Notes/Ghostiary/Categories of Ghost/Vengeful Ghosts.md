---
publish: true
created: 2026-09-29T15:34:33.406Z
modified: 2026-09-21T11:46:40.786Z
published: 2026-09-21T11:46:40.786Z
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
