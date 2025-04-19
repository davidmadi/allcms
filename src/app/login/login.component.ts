import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(private router: Router) {}

  login() {
    if (this.username === "admin" && this.password === "password") {
      this.router.navigate(["/dashboard"]);
    } else {
      // In a real application, you would display an error message.
      console.log("Invalid credentials");
    }
  }
}
