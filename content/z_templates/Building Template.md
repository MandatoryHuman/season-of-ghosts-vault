---
publish: true
permalink: /z_templates/Building Template.md
created: 2026-11-21T13:28:56.859Z
modified: 2026-09-26T16:03:09.123Z
published: 2026-09-26T16:03:09.123Z
tags:
  - location/building
settlement:
owner:
building_type: <% await tp.system.prompt("What kind of building? (e.g., Tavern, Smithy, Residence)") %>
---
> [!info]+ Establishment Details
> **Settlement:** `=this.settlement`
> **Owner:** `=this.owner`
> **Type:** `=this.building_type`

## Description


## Goods, Services & Rumours
- 

## Associated NPCs
- 
