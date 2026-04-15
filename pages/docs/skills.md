---
title: Skills
description: Execution primitives that power the TDS Agent — categories, installation, and skill reference
---

# {% $markdoc.frontmatter.title %}

## What Are Skills

Skills are the execution primitives that power the TDS Agent. Each Skill is a curated `.md` file — a structured, natural-language instruction set that defines how a specific trading element should be executed. When a strategy is deployed, the Agent maps its intent to the relevant installed Skills and pushes them to your Openclaw deployment, where the TDS MCP server uses them to carry out the trading operation efficiently and precisely.

Skills are not generic scripts. Each one is authored to handle the specific execution logic, timing, and edge cases of its trading pattern. The quality of skill definitions directly determines the reliability of execution.

## How Skills Work in the Platform

Skills are installed and managed from the **Skills Configuration** tab in the Terminal. Once installed, they are pushed to your Railway-hosted Openclaw instance and become available to the Agent immediately — no redeployment required.

The Agent picks up Skills dynamically based on strategy intent. You do not need to reference every Skill explicitly in your strategy. Skills can also be invoked directly using `@SkillName` syntax when you want precise control over which execution logic is applied. All Skills are versioned — the current library runs on **v2.0** across all categories.

![Skills Configuration — 15 skills across 6 categories with install/active states](/images/skills-configuration.png)
*Skills Configuration — 15 skills across 6 categories*

## Open Skill Library

The full Skill library is publicly available on GitHub. The repository is maintained by the TDS team and serves as the canonical source for all skill definitions — descriptions, parameters, usage examples, and execution logic.

Making the library public serves a deliberate purpose: Operators who understand how a Skill behaves can reason about how their strategies will execute. As the platform matures, the community can contribute improvements by raising pull requests — covering edge cases, refining execution logic, and building a more robust system that every trader can rely on.

![DCA Skill — expanded view showing description, risk level, and usage example](/images/skill-dca-expanded.png)
*@DCA Skill — expanded view showing description and usage example*

{% callout title="NOTE" %}
Skill library: GitHub link coming soon.
{% /callout %}

## Skill Categories

| Category | Description |
|---|---|
| **Accumulation** | Regular or conditional buying strategies designed for long-term position building |
| **Mean Reversion** | Signal-based strategies that trade on price returning toward a statistical average |
| **Trend** | Strategies that identify and follow directional price momentum |
| **Range** | Strategies that operate within defined price boundaries |
| **Rotation** | Strategies that shift allocation between assets based on relative conditions |
| **Exit** | Strategies focused on position closure — take profit, stop loss, and staged exit logic |

## Skill Reference

Individual skill definitions — descriptions, parameters, and usage examples — are documented per skill and will be updated progressively as the library evolves.

{% callout title="NOTE" %}
Skill definitions are being added progressively. Check the GitHub repository for the latest, or expand individual skills in the Skills Configuration tab for in-platform usage examples.
{% /callout %}

| Skill | Category | Risk | Status |
|---|---|---|---|
| @DCA | Accumulation | Low | Documented |
| @ValueAvg | Accumulation | Low | Coming soon |
| @MomentumDCA | Accumulation | Low | Coming soon |
| @AccumulateDip | Accumulation | Low–Medium | Coming soon |
| @RSIReversal | Mean Reversion | Medium | Coming soon |
| @BBBounce | Mean Reversion | Medium | Coming soon |
| @RSIBBDual | Mean Reversion | Medium | Coming soon |
| @MACross | Trend | Medium | Coming soon |
| *(Remaining Trend skills)* | Trend | — | Coming soon |
| *(Range skills)* | Range | — | Coming soon |
| *(Rotation skills)* | Rotation | — | Coming soon |
| *(Exit skills)* | Exit | — | Coming soon |

Total library: 15 skills across 6 categories. Table will be completed as skill definitions are published.
