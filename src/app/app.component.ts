import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetallesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portFolio';
}
