import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyasCompo1Component } from './shreyas-compo1.component';

describe('ShreyasCompo1Component', () => {
  let component: ShreyasCompo1Component;
  let fixture: ComponentFixture<ShreyasCompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreyasCompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShreyasCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
