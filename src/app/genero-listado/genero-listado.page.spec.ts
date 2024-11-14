import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneroListadoPage } from './genero-listado.page';

describe('GeneroListadoPage', () => {
  let component: GeneroListadoPage;
  let fixture: ComponentFixture<GeneroListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
