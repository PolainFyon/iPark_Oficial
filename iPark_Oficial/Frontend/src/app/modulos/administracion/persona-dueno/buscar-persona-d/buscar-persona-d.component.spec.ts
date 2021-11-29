import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonaDComponent } from './buscar-persona-d.component';

describe('BuscarPersonaDComponent', () => {
  let component: BuscarPersonaDComponent;
  let fixture: ComponentFixture<BuscarPersonaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPersonaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPersonaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
