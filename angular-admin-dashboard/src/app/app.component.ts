import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderSearchComponent } from './components/order-search.component';
import { UserRegistrationComponent } from "./components/user-registration.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin-dashboard';
}
