---
title: Wallet Setup & Ops
description: Managing your Agent wallet — deposits, withdrawals, private key export, and portfolio view
---

# {% $markdoc.frontmatter.title %}

All wallet functionality is accessible directly from the Terminal — no external wallet connection required. The Agent wallet is provisioned automatically on signup and is the sole wallet used for all strategy execution.

The right panel of the Terminal contains two tabs: **Wallet Ops** and **Portfolio**.

## Wallet Ops

The **Wallet Ops** tab is the primary control panel for your Agent wallet. It shows your wallet address on BASE, MCP Auth Token, and current token balances.

![Wallet Ops panel — address, MCP auth token, balance breakdown](/images/wallet-ops.png)
*Wallet Ops panel — address, MCP auth token, balance breakdown*

- **Address** — your Agent's wallet address on BASE, shown in truncated form. Click the copy icon to copy the full address.
- **MCP Auth Token** — your account-bound auth token in truncated form. Click the copy icon to copy it.
- **Your Balance** — total portfolio value in USD with a breakdown of all tokens held with a balance above $0.01.

## Adding Funds

Click **+ Add Funds** to reveal your deposit address.

![Deposit address — copy and send ETH or USDC on BASE](/images/wallet-add-funds.png)
*Deposit address — copy and send ETH or USDC on BASE*

Copy the address using **Copy Address** and send ETH or USDC to it on the BASE network. Funds appear in your balance once the transaction is confirmed on-chain.

{% callout title="WARNING" %}
Only send funds on the **BASE** network. Sending from a different network will result in permanent loss of funds.
{% /callout %}

## Withdrawing Funds

Click **Withdraw Funds** to open the withdrawal panel.

![Withdraw panel — destination address, amount, token selection](/images/wallet-withdraw.png)
*Withdraw panel — destination address, amount, token selection*

Enter your destination address, the amount to withdraw, and select ETH or USDC. Click **Confirm Withdraw** to execute. Withdrawals are dispatched on-chain and cannot be reversed once confirmed.

{% callout title="NOTE" %}
A 1% withdrawal fee is applied to all withdrawals from your terminal wallet. This fee is non-refundable and is disclosed at the point of withdrawal.
{% /callout %}

## Export Private Key

![Wallet panel — reveal private key](/images/wallet-private-key.png)
*Wallet panel — reveal private key*

Your Agent wallet's private key can be exported at any time. Click **reveal private key** to view it.

{% callout title="WARNING" %}
Handle with extreme care. Your private key gives complete and irrevocable access to your Agent wallet and all funds within it. TDS Terminal never stores or transmits your private key — once revealed, you are solely responsible for its security. If your private key is exposed to a third party, assume the wallet is compromised and move funds immediately.
{% /callout %}

## Portfolio

The **Portfolio** tab gives a full view of your Agent wallet's performance over time.

![Portfolio tab — net worth, performance metrics, history chart, distribution](/images/wallet-portfolio.png)
*Portfolio tab — net worth, performance, history chart, distribution*

| Element | What it shows |
|---|---|
| **Net Worth** | Total portfolio value in USD at current prices |
| **24h / 7d / All time** | Percentage performance over each time window |
| **Portfolio History** | Value chart from first deposit to now |
| **Distribution** | Token-level breakdown — amount held, USD value, and percentage of total portfolio |

The Portfolio tab is read-only. It reflects the current state of the Agent wallet as positions are executed by active strategies.
