import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppyComponent } from './uppy.component';

describe('UppyComponent', () => {
  let component: UppyComponent;
  let fixture: ComponentFixture<UppyComponent>;

  beforeEach(async(() => {
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
