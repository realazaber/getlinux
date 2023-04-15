import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualbootComponent } from './dualboot.component';

describe('DualbootComponent', () => {
  let component: DualbootComponent;
  let fixture: ComponentFixture<DualbootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualbootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
