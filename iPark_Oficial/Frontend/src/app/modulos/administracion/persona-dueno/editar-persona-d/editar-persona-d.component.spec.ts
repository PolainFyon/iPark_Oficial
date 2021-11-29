import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaDComponent } from './editar-persona-d.component';

describe('EditarPersonaDComponent', () => {
  let component: EditarPersonaDComponent;
  let fixture: ComponentFixture<EditarPersonaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
