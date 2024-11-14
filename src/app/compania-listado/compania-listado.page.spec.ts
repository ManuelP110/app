import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniaListadoPage } from './compania-listado.page';

describe('CompaniaListadoPage', () => {
  let component: CompaniaListadoPage;
  let fixture: ComponentFixture<CompaniaListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniaListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
