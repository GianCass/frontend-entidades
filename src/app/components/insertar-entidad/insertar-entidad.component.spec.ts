import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarEntidadComponent } from './insertar-entidad.component';

describe('InsertarEntidadComponent', () => {
  let component: InsertarEntidadComponent;
  let fixture: ComponentFixture<InsertarEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarEntidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
