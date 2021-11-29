import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarLocalComponent } from './borrar-local.component';

describe('BorrarLocalComponent', () => {
  let component: BorrarLocalComponent;
  let fixture: ComponentFixture<BorrarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
