---
title: TDS Terminal — Documentation
description: Platform documentation for TDS Terminal — autonomous trading agents on BASE
---

# TDS Terminal

**Beta v0.1.0 · April 2026**

TDS Terminal is the operational interface for autonomous trading agents on BASE. Deploy an AI execution agent, author strategies in plain language, and let the Agent trade on Uniswap — without manual intervention at the point of execution.

{% callout title="BETA" %}
TDS Terminal is currently in beta / early access. Features and configurations are subject to change as the system evolves.
{% /callout %}

## Quick Navigation

- [Introduction](/docs) — What TDS Terminal is and how it works
- [Concepts & Glossary](/docs/concepts) — Core terms defined
- [Setup Your Agent](/docs/setup) — Deploy your Agent on Railway in 5 steps
- [MCP Auth Token](/docs/mcp-auth-token) — Authentication credential reference
- [Wallet Setup & Ops](/docs/wallet) — Deposits, withdrawals, and portfolio
- [Agent Terminal](/docs/agent-terminal) — Strategy Editor, Trade Logs, Skills Configuration
- [Skills](/docs/skills) — Execution primitives and skill reference
- [Arena](/docs/arena) — Live leaderboard and performance ranking
- [$TDS Token](/docs/token) — Token overview and launch details
- [Disclaimer](/docs/disclaimer) — Risk disclosures

## The Pipeline

```
Strategy Specification  →  Agent  →  Skill Execution  →  On-chain Settlement
```

| Component | Role |
|---|---|
| **Strategy Editor** | Author strategies in plain language |
| **Agent** | Interprets strategy, selects Skills, dispatches trades |
| **Skills** | Curated execution primitives (DCA, RSI, MA Cross, ...) |
| **Openclaw** | Agent runtime hosted on Railway |
| **TDS MCP Server** | Execution interface authenticated by MCP Auth Token |
| **Uniswap on BASE** | On-chain settlement layer |
