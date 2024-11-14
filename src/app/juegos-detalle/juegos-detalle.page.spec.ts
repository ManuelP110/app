import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosDetallePage } from './juegos-detalle.page';

describe('JuegosDetallePage', () => {
  let component: JuegosDetallePage;
  let fixture: ComponentFixture<JuegosDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
