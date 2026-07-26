---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-07-26T12:51:05.415+01:00
modified: 2026-07-14T21:28:25.291+01:00
published: 2026-07-14T21:28:25.291+01:00
>>>>>>> 66ad995992ccbce3229cc4102d7625d4d1cb7ea2
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
