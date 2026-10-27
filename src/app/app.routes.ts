import { Routes, Route } from '@angular/router';
import { Layout } from './theme/layout/layout';
import { Role } from './core/config/navigation';

// Each feature is isolated. Teammates add their nested routes within their feature folder.
const featureRoutes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'authorization', loadComponent: () => import('./features/authorization/authorization').then(m => m.Authorization) },
  { path: 'customers', loadComponent: () => import('./features/customers/customers').then(m => m.Customers) },
  { path: 'kyc-underwriting', loadComponent: () => import('./features/kyc-underwriting/kyc-underwriting').then(m => m.KycUnderwriting) },
  { path: 'products', loadComponent: () => import('./features/products/products').then(m => m.Products) },
  { path: 'quotes', loadComponent: () => import('./features/quotes/quotes').then(m => m.Quotes) },
  { path: 'policies', loadComponent: () => import('./features/policies/policies').then(m => m.Policies) },
  { path: 'renewals', loadComponent: () => import('./features/renewals/renewals').then(m => m.Renewals) },
  { path: 'premiums', loadComponent: () => import('./features/premiums/premiums').then(m => m.Premiums) },
  { path: 'claims', loadComponent: () => import('./features/claims/claims').then(m => m.Claims) },
  { path: 'agents', loadComponent: () => import('./features/agents/agents').then(m => m.Agents) },
  { path: 'reports-dashboard', loadComponent: () => import('./features/reports-dashboard/reports-dashboard').then(m => m.ReportsDashboard) },
  { path: 'support', loadComponent: () => import('./features/support/support').then(m => m.Support) },
  { path: 'profile', loadComponent: () => import('./features/profile/profile').then(m => m.Profile) },
  { path: 'documents', loadComponent: () => import('./features/documents/documents').then(m => m.Documents) },
  { path: 'commissions', loadComponent: () => import('./features/commissions/commissions').then(m => m.Commissions) },
];

const roleRoute = (role: Role): Route => ({
  path: role,
  component: Layout,
  data: { role },
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ...featureRoutes
  ]
});

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin/dashboard' },
  { path: 'auth/login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
  roleRoute('admin'),
  roleRoute('agent'),
  roleRoute('customer'),
  { path: '**', redirectTo: 'admin/dashboard' }
];
