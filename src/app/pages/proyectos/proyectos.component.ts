import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  data: any;
  modalAbierto: boolean = false;
  modalItem: any; // Variable para almacenar el elemento seleccionado del JSON

  constructor() { }

  ngOnInit(): void {
    this.getData();
    
  }

  getData() {
    fetch('assets/data/proyectos.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Muestra el JSON en la consola
        this.data = data; // Asigna los datos a la propiedad "data"
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }

  abrirModal(item?: any) {
    if (item) {
      this.modalItem = item; // Establecer el elemento seleccionado para mostrar en el modal
    }
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.modalItem = null; // Limpiar el elemento seleccionado cuando se cierra el modal
  }
}








