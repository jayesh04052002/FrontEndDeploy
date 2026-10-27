# Insurance Frontend — Team Starter

Angular 22 common UI shell for the Java-Sculptor Insurance-Microservices team.

## Run locally (Windows, VS Code)

```powershell
node -v
npm ci
npm start
```

Open http://127.0.0.1:4200/ — routes redirect to `/admin/dashboard`.

Demo role routes: `/admin/dashboard`, `/agent/dashboard`, `/customer/dashboard`.
All sidebar parent items route to empty module feature components; submodules are deliberately not implemented.
Use the Role dropdown to preview each sidebar. `/auth/login` is **UI preview only**.

Verify the build:

```powershell
npm run build
```

Node version must be supported by Angular 22. Do not commit `node_modules`, `.angular`, or secrets.

## Organization

- `src/app/theme/` — team-lead-owned common layout and role-specific sidebars
- `src/app/core/config/navigation.ts` — single source for parent sidebar entries
- `src/app/features/<module>/` — assigned developer adds that module's components / child routes
- `src/app/auth/` — authorization team's login, security and role integration
- `src/app/shared/` — shared reusable UI components
- `src/app/app.routes.ts` — top-level lazy routes; coordinate edits with the team lead

There is **no real authentication**, no API data and no sample charts. Do not expose private customer data using this demo shell.

See `docs/TEAM_HANDOFF.md` for ownership and team working conventions.
