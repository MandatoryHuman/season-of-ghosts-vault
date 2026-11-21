---
publish: true
permalink: /3. Other Notes/Ghostiary/Categories of Ghost/Wandering Ghosts.md
created: 2026-11-21T12:52:22.275Z
modified: 2026-09-21T11:46:40.787Z
published: 2026-09-21T11:46:40.787Z
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
