---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-08-21T09:22:46.499Z
modified: 2026-07-14T20:28:25.291Z
published: 2026-07-14T20:28:25.291Z
>>>>>>> d031c42ce88cdbe53cbf40b34bd17730301da986
tags:
  - location/settlement
region: <% await tp.system.prompt("What broader region is this in?") %>
ruler:
population:
settlement_type: <% await tp.system.prompt("Type of settlement?)") %>
---
> [!info]+ Settlement Details
> **Type:** `=this.settlement_type`
> **Region:** `=this.region`
> **Leadership:** `=this.ruler`
> **Population:** `=this.population`

## Description

## Key Establishments

## Notable Residents
