# WERTHAN DAO DB-less Review

Date: 2026-08-12  
Branch reviewed: `dev`

## Scope

This review focuses on the project structure, features, frontend behavior, wallet flow, governance flow, reward flow, and the intended off-chain/on-chain sync model.

Per follow-up guidance, I reviewed the project without requiring a working MongoDB instance. I also checked whether the current repository is ready for testnet execution.

## Local Setup

The project is a Next.js 13 / React 18 Web3 app using Web3.js, `@web3-react`, MongoDB-backed API routes, and smart contract ABIs.

Commands used:

```powershell
git switch dev
npm install
npm run dev
```

On this Windows/Node 24 environment, Next could not load the native SWC package. I used this local workaround:

```powershell
npm install --no-save --package-lock=false @next/swc-wasm-nodejs@13.2.4
```

After that, the dev server started and the main pages were reviewable.

## Runtime Results Without DB

These routes rendered successfully:

- `/`
- `/vote`
- `/reward`

Observed behavior:

- `/vote` renders the escrow section and then gates governance interaction behind wallet connection.
- `/reward` renders the wallet-gated reward state.
- `/api/health` responds and reports `mongo: disconnected`, which matches the DB-less review scope.
- `/api/prices?ids=bitcoin` returns market data successfully when the external price API is reachable.

Routes that still depend on MongoDB:

- `/api/proposals/live`
- `/api/proposals/pending`
- `/api/proposals/past`
- `/api/proposals/create`
- `/api/proposals/sync`
- `/api/proposals/attachfile`

The proposal list endpoints currently hang without DB because they catch Mongo errors but do not return an error response.

## Project Structure

The project is organized as:

- `pages/` - Next.js routes and API routes
- `component/` - shared UI sections and layout components
- `utils/` - Web3 calls, wallet connectors, API client, helpers, pricing utilities
- `abi/` - smart contract ABIs
- `db/` - Mongo connection and proposal model
- `public/` - static images, scripts, uploads, and vendor assets

Main user-facing routes:

- `/` - marketing homepage
- `/vote` - DAO proposal, vote, and escrow account area
- `/reward` - founder/team/equity/CTO reward release area
- `/token`, `/roadmap`, `/team`, `/faq`, `/contact`, `/bloggrid`, `/blogdetails` - supporting content pages

## Core Feature Flow

### Wallet Flow

Wallet connection is handled through:

- MetaMask / injected wallet
- WalletConnect
- Coinbase Wallet

The app tries to enforce the configured chain before activation. However, the active network values are imported from `utils/_constants.js`, not from `.env`.

### Governance Flow

The intended proposal flow is:

1. User connects wallet.
2. App checks HODL balance, vote count, proposal eligibility, and vote eligibility.
3. Eligible user opens the New Proposal modal.
4. Frontend creates an off-chain Mongo proposal record.
5. Frontend calls the DAO smart contract `createProposal`.
6. Frontend syncs the returned on-chain proposal id back into Mongo.

This is a hybrid off-chain/on-chain model: proposal metadata lives in MongoDB, while proposal identity, voting, and execution state live on-chain.

### Reward Flow

The reward page checks whether the connected account appears in one of the local allowlists:

- founders
- team members
- equity partners

Then it reads releasable balances from splitter contracts and offers `release()` actions. CTO reward release is also wired to a splitter contract.

## Testnet Readiness

The current repository is not fully wired for testnet execution.

`.env` contains testnet-style values such as:

- `NETWORK_CHAIN_ID=5`
- `NETWORK_CHAIN_NAME=goerli`
- testnet-looking contract addresses

But the application imports hardcoded values from `utils/_constants.js`, including:

```js
export const NETWORK_CHAIN_ID = 137;
export const NETWORK_CHAIN_NAME = 'polygon-mainnet';
export const HODLDAO_ADDRESS = '0xa8b0249eB35cA066f8E0f35DFbC28c54Dc4bDA37';
export const HODL_ADDRESS = '0xD1777722a20CF1A71f0204E066011AAD040eC39d';
```

So the running app still targets Polygon mainnet unless those constants are changed or refactored to read environment variables.

I also tested the configured RPC candidates:

- `NEXT_PUBLIC_RPC_URL` resolves to Polygon chain id `137`.
- Goerli RPC candidates from `.env` were not reachable from this environment.

Conclusion: testnet testing is possible only after the app is pointed at a reachable testnet RPC and matching deployed testnet contract addresses.

## Key Findings

### 1. Voting UI is incomplete

In `pages/vote/index.jsx`, the `approve` and `deny` handlers are empty. In `utils/web3api.js`, the `vote` function is commented out.

Impact: users can view proposal details, but cannot actually cast approve/deny votes from the current UI.

### 2. Proposal amount mismatch

In `utils/web3api.js`, gas estimation converts `amount` to Wei, but the actual transaction sends the raw `amount`:

```js
estimateGas(... EthToWei(String(data.amount)) ...)
send(... data.amount ...)
```

Impact: on-chain proposal amounts may be wrong or transaction behavior may differ from gas estimation.

### 3. Off-chain/on-chain sync can leave orphan proposals

The app saves the Mongo proposal first, then calls the smart contract, then marks the Mongo proposal as synced.

Impact: if the wallet transaction is rejected or fails after Mongo save, the database can contain proposals that never existed on-chain.

### 4. Proposal APIs hang when Mongo is unavailable

Several API routes catch errors with `console.log(error)` but do not return a response.

Impact: frontend requests can stall, making DB/RPC issues harder to diagnose.

### 5. Stored HTML is rendered without sanitization

Proposal descriptions are displayed using `dangerouslySetInnerHTML`.

Impact: if user-submitted proposal HTML is not sanitized before storage or rendering, there is stored XSS risk.

### 6. Escrow dashboard has incorrect state mapping

In `component/Homepage/Escrowaccount/Escrowaccount.jsx`, WERTHAN MONI, HOT FUND, and Art Foundation balance fetches update `equityHoldingBalance` instead of their own state fields. The Art Foundation card also displays `inOutFloBalance`.

Impact: several displayed treasury balances can be inaccurate.

### 7. FTO balance helper reads the HODL contract

`getFTOBalance` initializes `hodlContract` and calls `hodlContract.methods.balanceOf`.

Impact: FTO balance display/checks would return HODL balances instead of FTO balances if used.

### 8. Build depends on Google Fonts

`pages/index.js` imports `Inter` from `next/font/google`, but the resulting `inter` constant is not used.

Impact: production build can fail or slow down when Google Fonts is unreachable, even though the import appears unnecessary.

## Recommended Next Steps

1. Refactor `utils/_constants.js` so network id, network name, RPC URL, and contract addresses come from environment variables.
2. Provide a dedicated testnet `.env.example` with matching RPC and deployed contract addresses.
3. Implement vote approve/deny handlers and restore the Web3 vote function.
4. Fix proposal amount conversion so estimation and send use the same unit.
5. Change proposal API catch blocks to return clear `500` JSON responses.
6. Add a sync recovery strategy for Mongo proposals created before failed/rejected wallet transactions.
7. Sanitize proposal HTML before rendering.
8. Fix escrow balance state mapping.
9. Remove unused `next/font/google` import or self-host the font.
10. Add smoke tests for DB-less rendering, API error responses, and Web3 read helpers.

## Overall Assessment

The project has a recognizable DAO architecture: a public Next.js frontend, wallet connection, on-chain read/write utilities, Mongo-backed proposal metadata, treasury transparency, and reward release flows.

The main gaps are not in the high-level structure. They are in execution readiness:

- network/testnet configuration is not consistently environment-driven
- voting actions are incomplete
- proposal sync can drift between Mongo and chain
- API routes need stronger failure behavior
- some displayed balances can be wrong

With those issues addressed, the project would be much easier to test end-to-end on a dedicated testnet deployment.
