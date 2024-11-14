import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioListadoPage } from './inventario-listado.page';

describe('InventarioListadoPage', () => {
  let component: InventarioListadoPage;
  let fixture: ComponentFixture<InventarioListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
