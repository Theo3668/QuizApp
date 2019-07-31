import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Results1Page } from './results1.page';

describe('Results1Page', () => {
  let component: Results1Page;
  let fixture: ComponentFixture<Results1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Results1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Results1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
