import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesDePagoListadoPage } from './detalles-de-pago-listado.page';

describe('DetallesDePagoListadoPage', () => {
  let component: DetallesDePagoListadoPage;
  let fixture: ComponentFixture<DetallesDePagoListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesDePagoListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
