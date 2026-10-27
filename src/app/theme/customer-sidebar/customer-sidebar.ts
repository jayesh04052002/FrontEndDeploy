import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-customer-sidebar',
  imports: [Sidebar],
  template: '<app-sidebar role="customer" />'
})
export class CustomerSidebar {}
