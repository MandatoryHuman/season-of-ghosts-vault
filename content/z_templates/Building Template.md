---
aliases: []
tags:
  - location/building
settlement: <% await tp.system.prompt("Which settlement is this in?") %>
owner:
buildingtype: <% await tp.system.prompt("What kind of building? (e.g., Tavern, Smithy, Residence)") %>
---
> [!info]+ Establishment Details
> **Settlement:** `=this.settlement`
> **Owner:** `=this.owner`
> **Type:** `=this.buildingtype`

## Description


## Goods, Services & Rumours
- 

## Associated NPCs
- 