import { Component } from '@angular/core';
import { InsertarEntidadComponent } from './components/insertar-entidad/insertar-entidad.component';
import { ListarEntidadesComponent } from './components/listar-entidades/listar-entidades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InsertarEntidadComponent, ListarEntidadesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
