# Deploy Handoff: kollaborate.ca

## DNS Records (GoDaddy)

Log in to GoDaddy at [dcc.godaddy.com](https://dcc.godaddy.com) (yosefyzb@gmail.com).

Navigate to: **My Products** > **kollaborate.ca** > **DNS** > **Manage DNS**

### Records to add/update:

| Type  | Name | Value                  | TTL     |
|-------|------|------------------------|---------|
| A     | @    | `76.76.21.21`          | 600     |
| CNAME | www  | `cname.vercel-dns.com` | 1 hour  |

### Steps:

1. If there is an existing A record for `@`, edit it. Otherwise, add a new one.
2. If there is an existing CNAME for `www`, edit it. Otherwise, add a new one.
3. Delete any conflicting A/AAAA/CNAME records for `@` or `www` that point elsewhere.
4. DNS propagation takes 5 to 30 minutes typically. Full propagation can take up to 48 hours.

## Vercel Setup

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Import the GitHub repo: `YosefBrodt/kollaborate-site`
3. Framework preset: **Next.js** (auto-detected)
4. Deploy
5. Go to **Project Settings** > **Domains**
6. Add `kollaborate.ca`
7. Add `www.kollaborate.ca` (will redirect to apex)

## Verification

After DNS propagates:
- Visit `https://kollaborate.ca` (should load the site)
- Visit `https://www.kollaborate.ca` (should redirect to apex)
- Check SSL certificate is valid (Vercel provisions automatically)

## Email (Resend)

If using `yosef@kollaborate.ca` for email:
- Add the domain in Resend dashboard
- Add the MX, SPF, and DKIM records Resend provides to GoDaddy DNS
- This is separate from the Vercel deploy and can be done later
