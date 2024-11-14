import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteListadoPage } from './cliente-listado.page';

describe('ClienteListadoPage', () => {
  let component: ClienteListadoPage;
  let fixture: ComponentFixture<ClienteListadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
