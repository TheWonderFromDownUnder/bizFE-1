import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthButtonComponent } from "./authbutton.component";
import { AuthUserComponent } from "./authuser.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, AuthButtonComponent, AuthUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
