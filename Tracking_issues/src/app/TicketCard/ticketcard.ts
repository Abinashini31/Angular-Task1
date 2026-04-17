import{ Component, input , output} from "@angular/core";
import { Issue } from "../models/issue.model";
@Component({
    selector: 'app-ticket-card',
    standalone: true,
    templateUrl: './ticketcard.html',
    styleUrl: './ticketcard.css'
})
export class TicketCard {
    issue = input.required<Issue>();
    resolve = output<number>();

    markDone() {
        this.resolve.emit(this.issue().id);
    }
}