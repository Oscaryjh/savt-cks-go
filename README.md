# SAVT CKS GO Mobile Prototype

React + TypeScript + TailwindCSS frontend-only prototype for the CKS GO grocery delivery module inside the SAVT super app.

## What is included

- CKS GO Home
- Category / Product Listing
- Product Detail
- Cart
- Checkout
- Order Tracking
- Mock products, vouchers, rewards, cashback, cart state, and order flow
- No backend, API, payment, login, register, OTP, or onboarding

## Business rules represented

- Users are already logged into SAVT.
- The nearest CKS branch is automatically selected.
- The UI shows `Delivering from CKS Lintas`.
- Users can change delivery address conceptually, but cannot choose a branch manually.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL on desktop or phone.

If npm is blocked by a local certificate error such as `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, fix the machine's npm certificate configuration or explicitly approve a temporary project-scoped install workaround before running the commands above.
