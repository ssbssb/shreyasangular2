import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCompoComponent } from './sample-compo.component';

describe('SampleCompoComponent', () => {
  let component: SampleCompoComponent;
  let fixture: ComponentFixture<SampleCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
