import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniaDetallePage } from './compania-detalle.page';

describe('CompaniaDetallePage', () => {
  let component: CompaniaDetallePage;
  let fixture: ComponentFixture<CompaniaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
