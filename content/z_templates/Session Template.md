---
aliases: []
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