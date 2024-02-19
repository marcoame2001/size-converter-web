import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoFormularioComponent } from './cuerpo-formulario.component';

describe('CuerpoFormularioComponent', () => {
  let component: CuerpoFormularioComponent;
  let fixture: ComponentFixture<CuerpoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
