---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-11-12T17:24:37.716Z
modified: 2026-09-21T11:46:40.768Z
published: 2026-09-21T11:46:40.768Z
>>>>>>> 547e8aa8f32463a58fac4d6373f66b5ea23adea0
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
