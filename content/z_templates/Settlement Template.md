---
<<<<<<< HEAD
aliases: []
=======
publish: true
created: 2026-07-26T14:48:43.662+01:00
modified: 2026-07-14T21:28:25.291+01:00
published: 2026-07-14T21:28:25.291+01:00
>>>>>>> 015ead5368073e847509fafbe90684253bff9fbe
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
