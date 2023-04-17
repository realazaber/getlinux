import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocardComponent } from './logocard.component';

describe('LogocardComponent', () => {
  let component: LogocardComponent;
  let fixture: ComponentFixture<LogocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogocardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
