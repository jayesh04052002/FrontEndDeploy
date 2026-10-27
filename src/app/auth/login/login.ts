import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Role, ROLE_LABELS, ROLES } from '../../core/config/navigation';

// Preview screen only. Authentication and token handling belong to the auth owner.
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly router = inject(Router);
  readonly roles = ROLES;
  readonly roleLabels = ROLE_LABELS;
  readonly selectedRole = signal<Role>('admin');
  onRoleChange(event: Event) { this.selectedRole.set((event.target as HTMLSelectElement).value as Role); }
  continue() { this.router.navigate(['/', this.selectedRole(), 'dashboard']); }
}
