import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlataformaListadoPage } from './plataforma-listado.page';

describe('PlataformaListadoPage', () => {
  let component: PlataformaListadoPage;
  let fixture: ComponentFixture<PlataformaListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
