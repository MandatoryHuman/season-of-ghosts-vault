---
publish: true
created: 2026-11-12T17:24:37.282Z
modified: 2026-09-21T11:46:40.786Z
published: 2026-09-21T11:46:40.786Z
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
