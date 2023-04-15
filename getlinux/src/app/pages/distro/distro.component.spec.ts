import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistroComponent } from './distro.component';

describe('DistroComponent', () => {
  let component: DistroComponent;
  let fixture: ComponentFixture<DistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
