import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoTallaMedidaComponent } from './cuerpo-talla-medida.component';

describe('CuerpoTallaMedidaComponent', () => {
  let component: CuerpoTallaMedidaComponent;
  let fixture: ComponentFixture<CuerpoTallaMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoTallaMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoTallaMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
