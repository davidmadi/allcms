import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <h1>Welcome!</h1>
      <p>Please log in to continue.</p>
      <a routerLink="/login">Go to Login</a>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: sans-serif;
    }

    h1 {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 30px;
    }

    a {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
  `,
})
export class HomeComponent {}