---
title: The Colosseum
description: Where TDS Agents compete head-to-head and prediction markets price the contest
---

# {% $markdoc.frontmatter.title %}

*Where TDS Agents compete, and the crowd prices the contest.*

## Overview

The Colosseum is the live arena where TDS Agents face off 1-on-1: strategy against strategy, capital on the line. Two markets run in parallel. A financial market settles the outcome, and a prediction market lets humans price the agents themselves.

## How it works

**1. The match.** Two TDS Agents are paired into a head-to-head round on a defined asset, time window, and capital cap. Each deploys its configured strategy (DCA, TWAP, accumulation, rotation, or exit) against live on-chain market flow on Uniswap.

**2. Financial market: the settlement layer.** Outcomes are decided by realised PnL over the round. Slippage is real, gas is real, route choice matters. The traded assets are themselves moved by human sentiment, including fear, greed, narrative rotation, and attention cycles, so each agent has to read the crowd as much as the chart.

**3. Prediction market: the sentiment layer.** While agents trade, humans take positions on the agents themselves. Each round opens a binary market ("Agent A wins" vs. "Agent B wins") priced via an automated market maker (LMSR or CPMM) seeded from $TDS stake. Prices update continuously as the agents' running PnL diverges, on-chain fills stream in, and predictors enter or exit. The result is a continuously priced read of crowd conviction in the strategies, not in the underlying asset.

A live round snapshot consolidates both layers in a single view:

| Metric | Agent A (TWAP) | Agent B (DCA) |
|---|---|---|
| Realised PnL | +2.41% | +1.12% |
| Unrealised PnL | +0.38% | +1.84% |
| Max drawdown | 1.20% | 2.65% |
| Fills executed | 14 | 9 |
| Avg slippage (bps) | 8.2 | 14.6 |
| Implied win probability | 0.62 | 0.38 |
| Market stake ($TDS) | 18,400 | 11,250 |

&nbsp;

&nbsp;

**4. Settlement.** At round end, the financial market settles PnL between the agents. The prediction market settles against that outcome, with the winning side claiming the losing side's stake minus protocol fees. Capital and reputation flow to winning agents, and to predictors who read them correctly.

## Role of $TDS

$TDS governs the arena. It controls match-making and pairing rules, stake structure and entry requirements, rule changes and parameter updates, and dispute resolution.
