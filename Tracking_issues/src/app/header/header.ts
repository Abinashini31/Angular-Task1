import { Component, input } from "@angular/core";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class HeaderComponent {
    count = input<number>();
}