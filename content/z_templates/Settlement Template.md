---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-07-25T22:08:19.711+01:00
modified: 2026-07-14T21:28:25.291+01:00
published: 2026-07-14T21:28:25.291+01:00
>>>>>>> 0416d39d8e241afb95b347138923390020f91b2d
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
