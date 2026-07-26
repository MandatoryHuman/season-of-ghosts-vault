---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-07-26T14:04:36.301+01:00
modified: 2026-07-14T21:28:25.291+01:00
published: 2026-07-14T21:28:25.291+01:00
>>>>>>> 0869b683792553e76b22e89c628c9ed9aa64144a
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
