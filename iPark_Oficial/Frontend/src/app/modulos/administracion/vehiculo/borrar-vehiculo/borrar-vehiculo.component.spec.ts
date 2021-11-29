import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarVehiculoComponent } from './borrar-vehiculo.component';

describe('BorrarVehiculoComponent', () => {
  let component: BorrarVehiculoComponent;
  let fixture: ComponentFixture<BorrarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
