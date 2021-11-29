import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonaDComponent } from './crear-persona-d.component';

describe('CrearPersonaDComponent', () => {
  let component: CrearPersonaDComponent;
  let fixture: ComponentFixture<CrearPersonaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
