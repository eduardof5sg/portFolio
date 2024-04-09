// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private componenteSeleccionadoSubject = new BehaviorSubject<string | undefined>(undefined);
  componenteSeleccionado$ = this.componenteSeleccionadoSubject.asObservable();

  setComponenteSeleccionado(componente: string) {
    this.componenteSeleccionadoSubject.next(componente);
  }
}








