import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonaCComponent } from './crear-persona-c.component';

describe('CrearPersonaCComponent', () => {
  let component: CrearPersonaCComponent;
  let fixture: ComponentFixture<CrearPersonaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
