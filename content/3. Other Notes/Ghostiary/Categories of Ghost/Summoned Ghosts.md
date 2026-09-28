---
publish: true
created: 2026-09-26T17:27:30.713Z
modified: 2026-09-21T11:46:40.786Z
published: 2026-09-21T11:46:40.786Z
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
