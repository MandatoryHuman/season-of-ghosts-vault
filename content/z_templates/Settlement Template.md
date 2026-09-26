---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-09-26T16:33:15.564Z
modified: 2026-09-21T11:46:40.768Z
published: 2026-09-21T11:46:40.768Z
>>>>>>> 2ba89d6f6c830a6f39fe3bfa42a86acfbd5a90b4
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
