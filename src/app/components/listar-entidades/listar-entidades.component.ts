import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../services/entidad.service';
import { Entidad } from '../../Models/entidad.model';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html'
})
export class ListarEntidadesComponent implements OnInit {
  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) {}

  ngOnInit() {
    this.entidadService.getEntidades().subscribe(data => {
      this.entidades = data;
    });
  }
}
