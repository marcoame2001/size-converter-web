import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoFavoritosComponent } from './cuerpo-favoritos.component';

describe('CuerpoFavoritosComponent', () => {
  let component: CuerpoFavoritosComponent;
  let fixture: ComponentFixture<CuerpoFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
