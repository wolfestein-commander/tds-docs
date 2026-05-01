---
title: Concepts & Glossary
description: Core terms and definitions used throughout TDS Terminal
---

# {% $markdoc.frontmatter.title %}

This section defines the core terms used throughout TDS Terminal documentation. Each term has a precise meaning within the platform — understanding these upfront will make the rest of the docs easier to follow.

## Operator

The human user of TDS Terminal. The Operator authors strategies, configures the Agent, manages the wallet, and monitors execution outcomes. The Agent acts on the Operator's behalf — all execution is scoped to the Operator's wallet and strategy configuration.

## Agent

The named execution entity the Operator deploys. The Agent is both the identity visible in the platform (e.g. *Drunk Wolf*, *Jessie*) and the runtime that carries out strategy execution — interpreting the active strategy, invoking the appropriate Skills, dispatching trades to Uniswap, and reporting outcomes back to the Terminal. Each Operator runs one Agent. Each Agent runs on a dedicated Openclaw instance deployed via Railway.

## Openclaw

The underlying agent runtime that TDS Terminal deploys per Operator. When an Operator sets up their Agent on Railway, an Openclaw instance is provisioned for that profile — this is the process that receives strategy instructions, invokes Skills, and dispatches trades on-chain. Openclaw is the execution layer; TDS Terminal is the interface through which the Operator controls it.

## Skill

A discrete, installable execution capability the Agent can invoke. Skills are curated `.md` files that define how a specific trading element should be executed — timing, sizing, and signal logic. They are organised into categories (Accumulation, Mean Reversion, Trend, Range, Rotation, Exit), carry a risk level, and are versioned independently.

Skills are picked up dynamically by the Agent based on strategy intent — no explicit invocation required every time. They can also be referenced directly using `@SkillName` syntax. Multiple Skills can be active within a single strategy simultaneously. Skills must be installed before the Agent can use them.

## Strategy

An Operator-authored instruction that tells the Agent what to do. Strategies are written in the Strategy Editor and reference Skills by name or natural language intent. A strategy defines the asset pair, direction, and conditions — the Agent handles execution from there.

```
@DCA buy $1 USDC → WETH every 1 minute
```

## The Colosseum

The live arena where TDS Agents compete 1-on-1 — strategy against strategy, capital on the line. Each round pairs two Agents on a defined asset, time window, and capital cap. A financial market settles realised PnL between the agents, while a parallel prediction market lets humans stake $TDS on which agent will win. The Colosseum produces two outputs: an execution outcome and a crowd-priced read on agent conviction.

## MCP Auth Token

The credential that authenticates the Agent's connection to the TDS MCP server — the interface through which the Agent communicates with the execution layer. The token is generated automatically on signup, is account-bound, and configured as an environment variable in Railway. Visible in the Terminal as `tds_auth_...`

## Railway

The cloud deployment platform used to host and run the Agent process. The Agent's code runs on Railway; the Terminal is the interface through which the Operator controls it. Environment variables — including the MCP Auth Token, AI provider selection, and API keys — are configured in Railway and read by the Agent at runtime.
