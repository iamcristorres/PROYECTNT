import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCargaComponent } from './nuevo-carga.component';

describe('NuevoCargaComponent', () => {
  let component: NuevoCargaComponent;
  let fixture: ComponentFixture<NuevoCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
