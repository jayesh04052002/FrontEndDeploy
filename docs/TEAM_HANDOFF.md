# Frontend ownership for integration

**TL-owned:** `theme/`, `core/config/navigation.ts`, `app.routes.ts` and shared conventions. Ask the TL before changing shared files.

| Team member | Assigned domain | `features/` directory |
| --- | --- | --- |
| Akansha | Authorization | `auth/`, `authorization/` |
| Jayesh | Customer Management | `customers/`, `profile/` |
| Rameez | KYC Verification and Underwriting | `kyc-underwriting/` |
| Atufa | Insurance Products | `products/` |
| Shreya | Quote Generation | `quotes/` |
| Rohit | Policy Issuance, Renewal, Closure and Servicing | `policies/`, `renewals/` |
| Shivam | Premium Schedule and Payment | `premiums/` |
| Manish | Claims, Investigation and Settlement | `claims/` |
| Savita | Agent Management | `agents/`, `commissions/` |
| Deepak (TL) | Reports and Dashboard | `dashboard/`, `reports-dashboard/` |
| To be assigned | Support | `support/` |
| Relevant module owner(s) | Documents and uploads | `documents/` |

**Workflow:** branch from `develop` (do not commit directly to `develop`), implement only owned feature folders, run `npm run build`, push your feature branch, and open a pull request to `develop`. TL reviews integrations.

**Sidebar contract:** only parent entries are included. Teams implement submodules inside their feature folder and add child navigation/routes as a reviewed enhancement. Do not insert all submodule links into the shared sidebars now.

**Role switching is for UI preview only.** Authentication/JWT/authorization come later. No backend dependency is required to test navigation.
