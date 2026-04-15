---
title: MCP Auth Token
description: How the MCP Auth Token works, where to find it, and how to configure it
---

# {% $markdoc.frontmatter.title %}

## What Is It

The MCP Auth Token is a unique credential generated automatically when you sign up on TDS Terminal. It is bound to your Operator account and serves as the only means by which your Agent is authenticated to access the TDS MCP server — the protected interface through which all execution capabilities are made available.

Every Operator receives exactly one token. It is not shared, not transferable, and not regenerated unless requested through support. Without a valid MCP Auth Token configured in your Railway deployment, your Agent cannot connect to the TDS MCP server and will not be able to execute any strategies.

## Where to Find It

Your MCP Auth Token is available in two places:

- **During Quickstart** — displayed in Step 1 immediately after sign-in, under *TDS Auth Token — Your MCP Key*. Use the **reveal** button to view the full token and **copy** to copy it to clipboard.
- **In the Terminal** — visible at all times in the top-right panel under **MCP Auth Token**, shown in truncated form as `tds_auth_...`

{% callout title="WARNING" %}
Keep your token private. Only enter it in Railway — never share it with anyone.
{% /callout %}

## How It Gets Configured

During the standard deployment flow, your MCP Auth Token is automatically carried over from the Quickstart into Railway as the `TDS_AUTH_TOKEN` environment variable. No manual input is required.

If you are setting up Railway manually or variables were not pre-filled, add it yourself:

1. Go to Railway → your service → **Variables**
2. Add the following variable:

```
TDS_AUTH_TOKEN = tds_auth_your_full_token_here
```

3. Click **Update** — Railway will restart the service with the new variable applied.

## Token Management

MCP Auth Tokens are account-bound and do not expire under normal operation. There is currently no self-serve regeneration option. If your token is compromised or you need a replacement, contact TDS support directly.
