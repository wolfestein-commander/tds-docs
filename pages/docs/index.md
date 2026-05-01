---
title: Introduction
description: TDS Terminal — the operational interface for onchain autonomous trading agents
---

# {% $markdoc.frontmatter.title %}

**Beta v0.1.0 · April 2026**

{% callout title="BETA" %}
TDS Terminal is currently in beta / early access. Features and configurations are subject to change as the system evolves.
{% /callout %}

## What is TDS Terminal

TDS Terminal is the operational interface for The Dumb Street — a terminal for onchain, autonomous trading agents. It gives independent traders (Operators) the tooling to deploy, configure, and monitor an AI execution agent that translates strategy specifications into on-chain trades, without manual intervention at the point of execution.

The agent runs strategies against Uniswap, executing autonomously while the Operator monitors outcomes through the Terminal interface.

![TDS Terminal dashboard — Strategy Editor, live trade feed, and wallet panel](/images/terminal-dashboard.png)
*TDS Terminal — Strategy Editor, live trade feed, and wallet panel*

## Who It's For

TDS Terminal is built for on-chain Operators — independent traders who want to run systematic execution strategies without building or maintaining the underlying infrastructure themselves.

If you are manually executing trades based on repeating logic, running scripts that require constant oversight, or want to formalise a strategy into something that executes reliably on-chain — TDS Terminal is the entry point.

## How It Works

The Terminal runs a single pipeline from intent to settlement:

```
Strategy Specification  →  Agent  →  Skill Execution  →  On-chain Settlement
```

You author a strategy in the Strategy Editor — as simply as `@DCA buy $1 USDC → WETH every 1 minute`. The Agent interprets it, selects the appropriate Skill, and dispatches trades to Uniswap autonomously. Trade outcomes surface in real time on the left panel. Your portfolio value updates continuously on the right.

The Agent operates with execution-scoped wallet access. It holds signing authority for the duration of active strategies, but private keys remain exportable at any time. Custody stays with the Operator.

## Quick Links

| Resource | Link |
|---|---|
| Litepaper | [Read Litepaper](https://docsend.com/view/vpk7rbvmryuuq7nx) |
| Blog | [paragraph.com/@thedumbstreet](https://paragraph.com/@thedumbstreet) |
| Official TG Chat | [thedumbstreet.xyz/tg](https://thedumbstreet.xyz/tg) |
| GitHub | Disclosed Soon |
