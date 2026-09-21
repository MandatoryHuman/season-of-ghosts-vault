---
publish: true
created: 2026-09-21T23:13:00.203Z
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
