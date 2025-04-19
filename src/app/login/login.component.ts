import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterModule } from "@angular/router";import { AuthService } from "../auth.service";

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
  username = "admin";
  password = "password";

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.username === "admin" && this.password === "password") {
      this.authService.login();
      this.router.navigate(["/dashboard"]); // Navigate after successful login
    } else {
      // In a real application, you would display an error message.
      console.log("Invalid credentials");
    }
  }
}

