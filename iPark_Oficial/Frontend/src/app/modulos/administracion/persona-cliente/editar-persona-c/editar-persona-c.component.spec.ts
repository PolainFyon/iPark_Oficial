import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaCComponent } from './editar-persona-c.component';

describe('EditarPersonaCComponent', () => {
  let component: EditarPersonaCComponent;
  let fixture: ComponentFixture<EditarPersonaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
