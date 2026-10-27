# Local verification

1. In VS Code open the `insurance-frontend` folder (`package.json` should be visible).
2. `npm ci`
3. `npm start`
4. Visit http://127.0.0.1:4200/admin/dashboard
5. Verify admin sidebar shows parent sections only, click **Reports & Dashboard**.
6. Switch role to Agent, check `/agent/dashboard` and click **Claims**.
7. Switch role to Customer, check `/customer/dashboard` and click **My Profile**.
8. Use browser Back/Forward to verify navigation, and test small viewport menu.
9. Open `/auth/login` and preview the role selector (not real auth).
10. Stop dev server with Ctrl+C and run `npm run build`.

Expected: no demo charts/activity, no nested sidebar items; each parent route opens an isolated feature page.
