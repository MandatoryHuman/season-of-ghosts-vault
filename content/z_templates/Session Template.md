---
title: <% tp.file.title %>
aliases: []
tags:
  - session
real_date: <% tp.file.creation_date("YYYY-MM-DD") %>
in_game_date: <% await tp.system.prompt("What is the in-game date?") %>
characters_present: <% await tp.system.prompt("Who is present?") %>
location: <% await tp.system.prompt("Where does this session take place?") %>
summary: <% await tp.system.prompt("Give a one-line summary of the session.") %>
status: <% await tp.system.prompt("Status? (e.g., Played, Planned, Recap Needed)") %>
---

> [!info]+ Session Details
> **Date Played:** `=this.real_date`
> **In-Game Date:** `=this.in_game_date`
> **Characters Present:** `=this.characters_present`
> **Location:** `=this.location`
> **Status:** `=this.status`

## Summary
`=this.summary`

## Session Log
- 

## Discoveries & Clues
- 

## NPCs, Factions & Locations
- 

## Loot & Rewards
- 

## Outstanding Threads / To-Dos
- 

## Next Session
- 
