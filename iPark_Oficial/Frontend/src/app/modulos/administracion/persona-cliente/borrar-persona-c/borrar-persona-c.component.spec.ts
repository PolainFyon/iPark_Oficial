import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPersonaCComponent } from './borrar-persona-c.component';

describe('BorrarPersonaCComponent', () => {
  let component: BorrarPersonaCComponent;
  let fixture: ComponentFixture<BorrarPersonaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPersonaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPersonaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
