import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPersonaDComponent } from './borrar-persona-d.component';

describe('BorrarPersonaDComponent', () => {
  let component: BorrarPersonaDComponent;
  let fixture: ComponentFixture<BorrarPersonaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPersonaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPersonaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
