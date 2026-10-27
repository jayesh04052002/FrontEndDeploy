import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-admin-sidebar',
  imports: [Sidebar],
  template: '<app-sidebar role="admin" />'
})
export class AdminSidebar {}
