import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLocalComponent } from './buscar-local.component';

describe('BuscarLocalComponent', () => {
  let component: BuscarLocalComponent;
  let fixture: ComponentFixture<BuscarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
