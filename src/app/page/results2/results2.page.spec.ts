import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Results2Page } from './results2.page';

describe('Results2Page', () => {
  let component: Results2Page;
  let fixture: ComponentFixture<Results2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Results2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Results2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
