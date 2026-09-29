---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-09-26T17:27:30.998Z
modified: 2026-09-21T11:46:40.768Z
published: 2026-09-21T11:46:40.768Z
>>>>>>> 941ecbd79844372c98e2cbd61bb097f84494349f
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
