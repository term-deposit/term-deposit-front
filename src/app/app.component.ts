import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSubmenuOpen = false;
  showOverlay = false;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  simulate() {
    // Implement your simulation logic here
    alert('Simulación realizada');
  }

}
