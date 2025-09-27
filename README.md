# WERTHANDAO

A Web3 decentralized application for **WERTHANDAO** — a community-governed organization on the Polygon blockchain. The platform combines a public-facing crypto website with on-chain governance, token vesting, and treasury transparency.

## Overview

WERTHAN DAO lets HODL token holders participate in organizational decisions through proposals and voting. Stakeholders such as founders, team members, and equity partners can claim vested token rewards directly from smart contracts. Proposal metadata is stored in MongoDB and synchronized with on-chain governance contracts for a hybrid off-chain / on-chain workflow.

## Run the project locally

This is a [Next.js](https://nextjs.org/) app (Web3 / DAO-related UI). It was originally bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Prerequisites

- [Node.js](https://nodejs.org/) **18.x or newer** (including **Node 24**; this repo declares `engines.node` in `package.json`)
- [npm](https://docs.npmjs.com/cli/v10/commands/npm-install) (comes with Node)

### 1. Install dependencies

The repo includes an [`.npmrc`](./.npmrc) file with `legacy-peer-deps=true` so `npm install` succeeds on current npm versions (for example npm 11 with **Node 24**). Without it, npm can fail with a peer dependency error between **React 18** and `react-currency-format` (that package only declares peer support up to React 17).

From the project root:

```bash
npm install
```

**Windows:** avoid running two `npm install` processes at the same time for this folder. If Next.js reports **“Failed to load SWC binary”**, close other terminals or editors using `node_modules`, then run `npm install` again. On 64-bit Windows, `@next/swc-win32-x64-msvc` is listed under `optionalDependencies` in `package.json` so the native compiler matches **Next 13.2.4**.

You may see **webpack cache `EBUSY` … rename** warnings during `npm build`; the build can still finish successfully. If they persist, stop the dev server, delete the `.next` folder, and run `npm build` again.

### 2. Environment variables (optional)

If you have a `.env` file in the project root, Next.js loads it automatically when you run the dev or production server.

For RPC stability, you can set your own preferred endpoint first:

```env
NEXT_PUBLIC_RPC_URL=https://your-preferred-polygon-rpc
```

The app now uses `NEXT_PUBLIC_RPC_URL` first (if set), then falls back to built-in public Polygon RPC endpoints.

### 3. Start the development server

```bash
npm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The app listens on port **3000** by default.

**Windows (PowerShell):** if you chain commands in one line, older PowerShell may not accept `&&`. Use a semicolon instead, for example:

```powershell
Set-Location path\to\nashtn-werthan-dao-main; npm dev
```

### Other useful scripts

| Command | Description |
| --- | --- |
| `npm dev` | Development server with hot reload |
| `npm build` | Production build |
| `npm start` | Run the production server (run `build` first) |
| `npm lint` | Run Next.js ESLint |
| `npm dapp` | Run `node utils/dapp.js` (separate from the web app) |

### Production build locally

```bash
npm build
npm start
```

The production server also defaults to [http://localhost:3000](http://localhost:3000) unless you set the `PORT` environment variable.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy this Next.js app is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.
