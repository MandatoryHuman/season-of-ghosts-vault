---
publish: true
permalink: /3. Other Notes/Ghostiary/Categories of Ghost/Bound Ghosts.md
created: 2026-11-21T12:52:22.269Z
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
