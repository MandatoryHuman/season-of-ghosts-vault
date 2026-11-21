---
publish: true
permalink: /z_templates/Settlement Template.md
created: 2026-11-21T13:28:56.875Z
modified: 2026-09-21T11:46:40.768Z
published: 2026-09-21T11:46:40.768Z
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
