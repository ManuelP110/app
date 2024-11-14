import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlataformaDetallePage } from './plataforma-detalle.page';

describe('PlataformaDetallePage', () => {
  let component: PlataformaDetallePage;
  let fixture: ComponentFixture<PlataformaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
