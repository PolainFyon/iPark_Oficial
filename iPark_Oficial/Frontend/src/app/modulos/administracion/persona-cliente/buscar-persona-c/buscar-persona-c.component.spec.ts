import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonaCComponent } from './buscar-persona-c.component';

describe('BuscarPersonaCComponent', () => {
  let component: BuscarPersonaCComponent;
  let fixture: ComponentFixture<BuscarPersonaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPersonaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
