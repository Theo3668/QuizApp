import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Results3Page } from './results3.page';

describe('Results3Page', () => {
  let component: Results3Page;
  let fixture: ComponentFixture<Results3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Results3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Results3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
