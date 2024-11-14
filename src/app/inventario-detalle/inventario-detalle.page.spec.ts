import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioDetallePage } from './inventario-detalle.page';

describe('InventarioDetallePage', () => {
  let component: InventarioDetallePage;
  let fixture: ComponentFixture<InventarioDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
