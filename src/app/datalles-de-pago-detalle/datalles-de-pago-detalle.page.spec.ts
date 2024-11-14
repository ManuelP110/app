import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatallesDePagoDetallePage } from './datalles-de-pago-detalle.page';

describe('DatallesDePagoDetallePage', () => {
  let component: DatallesDePagoDetallePage;
  let fixture: ComponentFixture<DatallesDePagoDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatallesDePagoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
