import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UppyComponent } from './uppy.component';

describe('UppyComponent', () => {
  let component: UppyComponent;
  let fixture: ComponentFixture<UppyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
