---
title: "Nanoo CDN"
description: "high-performance, serverless Content Delivery Network (CDN)"
date: "Apr 17, 2026"
demoURL: "https://cdn.nanoolabs.dev"
repoURL: "https://github.com/nanoolabs/nanoo-cdn"
---



A high-performance, serverless Content Delivery Network (CDN) edge proxy for `nanoo` ecosystems. Built on top of **Cloudflare Workers** to proxy requests securely to private **Backblaze B2** buckets.

Based on the [cloudflare-b2](https://github.com/backblaze-b2-samples/cloudflare-b2) implementation by Backblaze.

## Architecture & Logic

This repository acts as the middle-man between end-users and the private storage backend. By keeping the B2 bucket **Private**, it prevents unauthorized bucket enumeration and hotlinking. 

The Cloudflare Worker intercepts requests to `cdn.nanoolabs.dev`, signs them on-the-fly using AWS Signature Version 4 (`aws4fetch`), and fetches the objects from the B2 S3 endpoint.

### Key Benefits
- **Zero Egress Cost:** Leverages the Bandwidth Alliance between Cloudflare and Backblaze. Egress traffic from B2 to Cloudflare is completely free.
- **Edge Caching:** Assets are aggressively cached at Cloudflare Edge Nodes (`cf-cache-status: HIT`) using `Cache-Control` directives injected at the B2 level, drastically reducing Origin fetches and Class B transactions.
- **Secure by Default:** Directory listing (`ALLOW_LIST_BUCKET`) is hard-disabled. The B2 Master Key is never exposed; the Worker uses an isolated Application Key scoped strictly to the `nanoo-assets` bucket.

## Infrastructure as Code (IaC)

Configuration is managed via `wrangler.toml`. Routing parameters and public identifiers are tracked in Git, while actual secrets are injected directly into the Cloudflare encrypted vault.

```toml
# wrangler.toml
name = "nanoo-cdn"
main = "index.js"
compatibility_date = "2026-04-17"

[vars]
B2_APPLICATION_KEY_ID = "YOUR_APP_KEY_ID"
B2_ENDPOINT = "s3.eu-central-003.backblazeb2.com"
BUCKET_NAME = "nanoo-assets"
ALLOW_LIST_BUCKET = "false"

[[routes]]
pattern = "cdn.nanoolabs.dev"
custom_domain = true
```
