---
publish: true
title: <% tp.file.title %>
created: 2026-09-29T15:34:33.688Z
modified: 2026-09-29T15:32:50.666Z
published: 2026-09-29T15:32:50.666Z
tags:
  - session
aliases: []
real_date: <% tp.file.creation_date("YYYY-MM-DD") %>
in_game_date: <% await tp.system.prompt("What is the in-game date?") %>
characters_present: <% await tp.system.prompt("Who is present?") %>
location: <% await tp.system.prompt("Where does this session take place?") %>
summary: <% await tp.system.prompt("Give a one-line summary of the session.") %>
status: <% await tp.system.prompt("Status? (e.g., Played, Planned, Recap Needed)") %>
---

> [!info]+ Session Details
> **Date Played:** <% tp.file.creation\_date("YYYY-MM-DD") %>
> **In-Game Date:** <% await tp.system.prompt("What is the in-game date?") %>
> **Characters Present:** <% await tp.system.prompt("Who is present?") %>
> **Location:** <% await tp.system.prompt("Where does this session take place?") %>
> **Status:** <% await tp.system.prompt("Status? (e.g., Played, Planned, Recap Needed)") %>

## Summary

<% await tp.system.prompt("Give a one-line summary of the session.") %>

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
