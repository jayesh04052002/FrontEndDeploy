import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Role, ROLE_LABELS, SIDEBAR_ITEMS } from '../../core/config/navigation';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  readonly role = input.required<Role>();
  readonly items = computed(() => SIDEBAR_ITEMS[this.role()]);
  readonly roleLabels = ROLE_LABELS;
}
