import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAsignaturaComponent } from './nuevo-asignatura.component';

describe('NuevoAsignaturaComponent', () => {
  let component: NuevoAsignaturaComponent;
  let fixture: ComponentFixture<NuevoAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
