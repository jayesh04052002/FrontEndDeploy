import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { AgentSidebar } from '../agent-sidebar/agent-sidebar';
import { CustomerSidebar } from '../customer-sidebar/customer-sidebar';
import { Role, ROLES, ROLE_LABELS, SIDEBAR_ITEMS } from '../../core/config/navigation';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AdminSidebar, AgentSidebar, CustomerSidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly role = this.route.snapshot.data['role'] as Role;
  readonly roleLabels = ROLE_LABELS;
  readonly roles = ROLES;
  readonly mobileOpen = signal(false);
  readonly currentUrl = signal(this.router.url);
  readonly currentLabel = computed(() => {
    const segment = this.currentUrl().split('?')[0].split('/')[2] ?? 'dashboard';
    return SIDEBAR_ITEMS[this.role].find(item => item.path === segment)?.label ?? 'Dashboard';
  });
  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(event => { this.currentUrl.set(event.urlAfterRedirects); this.mobileOpen.set(false); });
  }
  onRoleChange(event: Event) {
    const role = (event.target as HTMLSelectElement).value as Role;
    if (this.roles.includes(role)) this.router.navigate(['/', role, 'dashboard']);
  }
}
