---
publish: true
created: 2026-08-04T11:05:05.372Z
modified: 2026-07-14T20:28:25.291Z
published: 2026-07-14T20:28:25.291Z
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
