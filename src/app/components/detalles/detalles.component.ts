import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../../pages/bienvenido/bienvenido.component';
import { SobreMiComponent } from '../../pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../../pages/proyectos/proyectos.component';
import { ContactoComponent } from '../../pages/contacto/contacto.component';



@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, BienvenidoComponent, ProyectosComponent,SobreMiComponent,ContactoComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  componenteSeleccionado: string | undefined;
 

  constructor(private dataService: DataService) {
    this.dataService.componenteSeleccionado$.subscribe((componente) => {
      this.componenteSeleccionado = componente;
      // Al seleccionar un componente, ocultar el contador
      
    });
  }
}

 

