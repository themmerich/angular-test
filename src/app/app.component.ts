import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {StyleClassModule} from 'primeng/styleclass';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StyleClassModule, RouterLink],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test';
}
