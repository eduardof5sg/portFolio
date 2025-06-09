import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {
  goToInstagram(): void {
    window.open('https://www.instagram.com/eduardodev__/', '_blank');
  }
  goToWhatsApp(): void {
    window.open('https://wa.me/34627339450', '_blank');
  }

  goToLinkedin():void{
    window.open('https://www.linkedin.com/in/eduardo-silva-gamarra-9012672aa/', '_blank')
  }
}
