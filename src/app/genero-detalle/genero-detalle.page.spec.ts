import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneroDetallePage } from './genero-detalle.page';

describe('GeneroDetallePage', () => {
  let component: GeneroDetallePage;
  let fixture: ComponentFixture<GeneroDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
