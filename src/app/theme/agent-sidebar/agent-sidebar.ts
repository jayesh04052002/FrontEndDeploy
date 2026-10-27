import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-agent-sidebar',
  imports: [Sidebar],
  template: '<app-sidebar role="agent" />'
})
export class AgentSidebar {}
