import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCargaComponent } from './modificar-carga.component';

describe('ModificarCargaComponent', () => {
  let component: ModificarCargaComponent;
  let fixture: ComponentFixture<ModificarCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
