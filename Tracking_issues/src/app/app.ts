import { Component, signal, computed} from '@angular/core';
import { HeaderComponent } from './header/header';
import { Issue } from './models/issue.model';
import { TicketCard } from './TicketCard/ticketcard';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, TicketCard, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  issues = signal<Issue[]>([
    { id: 1, title: 'Issue 1', priority: 'High', isResolved: false },
    { id: 2, title: 'Issue 2', priority: 'Medium', isResolved: true },
    { id: 3, title: 'Issue 3', priority: 'Low', isResolved: false }
  ]);
  unresolvedIssues = computed(() => this.issues().filter(issue => !issue.isResolved).length);

  markResolved(id: number) {
    this.issues.update(list => list.map(issue => issue.id === id ? { ...issue, isResolved: true } : issue));
  }
}

