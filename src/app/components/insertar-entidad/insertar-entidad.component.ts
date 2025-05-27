import { Component } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../Models/entidad.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-insertar-entidad',
  templateUrl: './insertar-entidad.component.html',
  styleUrls: ['./insertar-entidad.component.css'],
  standalone: true, 
  imports: [FormsModule] 
})
export class InsertarEntidadComponent {
  entidad: Entidad = { nit: '', nombre: '' };
  mensaje = '';

  constructor(private entidadService: EntidadService) {}

  insertar() {
    this.entidadService.insertarEntidad(this.entidad).subscribe({
      next: (data) => {
        this.mensaje = 'Entidad insertada exitosamente';
        this.entidad = { nit: '', nombre: '' };
      },
      error: () => {
        this.mensaje = 'Error al insertar entidad';
      }
    });
  }
}
