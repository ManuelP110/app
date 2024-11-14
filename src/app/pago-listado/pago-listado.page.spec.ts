import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoListadoPage } from './pago-listado.page';

describe('PagoListadoPage', () => {
  let component: PagoListadoPage;
  let fixture: ComponentFixture<PagoListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
