This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## url1234.com Subdomain Operations

The `url1234.com` domain is managed inside the Vercel team `deven-projects`. Two key subdomains are:

- `bunny-garden.url1234.com` → serves the Bunny's Garden interactive book (deployment `url1234-<hash>-deven-projects.vercel.app`).
- `homebuilderai.url1234.com` → serves the HomeBuilder AI app (deployment `homebuilder-<hash>-deven-projects.vercel.app`).

### Prerequisite Configuration

Create or update `.env.local` (and mirror the values in the Vercel project environment) with:

```
VERCEL_TOKEN=your-vercel-api-token
VERCEL_TEAM_ID=team_IK60qekHHQDbJtujh7udLJj5
BASE_DOMAIN=url1234.com
```

Where to find these values:

- `VERCEL_TOKEN`: Generate a token from the Vercel dashboard (`Account Settings → Tokens`). Grant at least the `deployments.write` scope. Store it as an environment variable (never check it into git).
- `VERCEL_TEAM_ID`: Open any project in the `deven-projects` team and copy the `teamId` parameter from the URL (format `team_...`). It is also visible via `vercel teams inspect`.
- `BASE_DOMAIN`: The parent domain managed inside the team, currently `url1234.com`. Change it only if you migrate to a different apex domain.

After editing `.env.local`, restart the dev server so Next.js picks up the new values. In Vercel, add the same keys under **Project → Settings → Environment Variables**.

### Common Failure: 404 DEPLOYMENT_NOT_FOUND

If `https://homebuilderai.url1234.com` (or another subdomain) returns a Vercel 404 with `x-vercel-error: DEPLOYMENT_NOT_FOUND`, the domain is pointed at the wrong project/deployment. This recently happened because `homebuilderai.url1234.com` was still aliased to the `url1234-com` project instead of the new `homebuilder-ai` project.

### How to Diagnose

1. Confirm the CLI scope and credentials:
   ```bash
   vercel whoami
   ```
2. List the alias bindings and check the `source` deployment for the hostname:
   ```bash
   vercel alias ls | grep homebuilderai
   ```
   A healthy binding shows the HomeBuilder deployment as the source (e.g. `homebuilder-hr8uchuzv-deven-projects.vercel.app`).
3. Inspect the deployment if needed:
   ```bash
   vercel inspect homebuilderai.url1234.com
   ```
   Verify the `Aliases` block lists the hostname under the expected deployment.

### How to Fix

1. Remove the stale alias (safe; it only removes the hostname mapping):
   ```bash
   vercel alias rm homebuilderai.url1234.com --yes
   ```
2. Point the hostname at the intended deployment:
   ```bash
   vercel alias set homebuilder-<deployment-id>.vercel.app homebuilderai.url1234.com
   ```
   Replace `<deployment-id>` with the current production deployment for the HomeBuilder AI project. You can list recent production deployments with:
   ```bash
   vercel list homebuilder-ai --environment production
   ```
3. Verify:
   ```bash
   curl -I https://homebuilderai.url1234.com
   ```
   Expect a 200-series status or the project's intended response (HomeBuilder AI currently returns `401` while its auth wall is enabled).

### Preventative Tips

- After promoting a new HomeBuilder AI deployment, re-run the `vercel alias set` command to ensure the alias tracks the latest build.
- Keep `*.url1234.com` assigned only to the project responsible for wildcard subdomain routing (currently `url1234-com`). Dedicated apps like HomeBuilder AI should bind their exact subdomain to their own project.
- Document the latest deployment hash in the project tracker so team members know which source ID to alias if a rollback or reassignment is needed.

## Admin Automation

Visit `/admin` (e.g. `https://url1234.com/admin`) to access the Subdomain Admin panel. It lets you enter a subdomain, the target Vercel project slug, and calls the Vercel API to add that domain to the project. Once added, every future production deployment receives the domain automatically—no manual aliasing required.

### Adding New Subdomains on Demand

1. Deploy or link the new application as its own Vercel project (GitHub pushes trigger deployments).
2. Open `/admin`, supply the new subdomain (or full domain) plus the project slug, and submit.
3. Verify the success message, then confirm with `curl -I https://newsub.url1234.com`.

### Security Notes

- Protect `/admin` when running in production—e.g. via Vercel password protection, a shared-secret check, or edge middleware.
- Keep `VERCEL_TOKEN`, `VERCEL_TEAM_ID`, and `BASE_DOMAIN` stored server-side only.
