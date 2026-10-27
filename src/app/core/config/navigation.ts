/** TL-maintained menu definitions. Top-level sections only: developers add sub-pages inside features/. */
export type Role = 'admin' | 'agent' | 'customer';
export interface SidebarItem { label: string; path: string; icon: string; }
export const ROLE_LABELS: Record<Role,string> = {
  admin: 'Admin', agent: 'Agent', customer: 'Customer'
};
export const ROLES: readonly Role[] = ['admin', 'agent', 'customer'];
export const SIDEBAR_ITEMS: Record<Role, SidebarItem[]> = {
  admin: [
    { label: 'Dashboard', path: 'dashboard', icon: 'grid-1x2' },
    { label: 'Authorization', path: 'authorization', icon: 'shield-lock' },
    { label: 'Customer Management', path: 'customers', icon: 'people' },
    { label: 'KYC & Underwriting', path: 'kyc-underwriting', icon: 'person-check' },
    { label: 'Insurance Products', path: 'products', icon: 'shield-check' },
    { label: 'Quote Generation', path: 'quotes', icon: 'calculator' },
    { label: 'Policies', path: 'policies', icon: 'file-earmark-check' },
    { label: 'Policy Renewal', path: 'renewals', icon: 'arrow-repeat' },
    { label: 'Premiums & Payments', path: 'premiums', icon: 'wallet2' },
    { label: 'Claims', path: 'claims', icon: 'clipboard2-check' },
    { label: 'Agent Management', path: 'agents', icon: 'person-badge' },
    { label: 'Reports & Dashboard', path: 'reports-dashboard', icon: 'bar-chart-line' },
    { label: 'Support', path: 'support', icon: 'headset' },
  ],
  agent: [
    { label: 'Dashboard', path: 'dashboard', icon: 'grid-1x2' },
    { label: 'Customer', path: 'customers', icon: 'people' },
    { label: 'Quote', path: 'quotes', icon: 'calculator' },
    { label: 'Policies', path: 'policies', icon: 'file-earmark-check' },
    { label: 'Policy renewal', path: 'renewals', icon: 'arrow-repeat' },
    { label: 'Premiums', path: 'premiums', icon: 'wallet2' },
    { label: 'Claims', path: 'claims', icon: 'clipboard2-check' },
    { label: 'Document', path: 'documents', icon: 'folder2-open' },
    { label: 'Commission', path: 'commissions', icon: 'cash-coin' },
  ],
  customer: [
    { label: 'Dashboard', path: 'dashboard', icon: 'grid-1x2' },
    { label: 'My Profile', path: 'profile', icon: 'person-circle' },
    { label: 'Insurance Product', path: 'products', icon: 'shield-check' },
    { label: 'Quote', path: 'quotes', icon: 'calculator' },
    { label: 'My Policies', path: 'policies', icon: 'file-earmark-check' },
    { label: 'Premiums', path: 'premiums', icon: 'wallet2' },
    { label: 'Claims', path: 'claims', icon: 'clipboard2-check' },
    { label: 'Documents', path: 'documents', icon: 'folder2-open' },
    { label: 'Support', path: 'support', icon: 'headset' },
  ]
};
