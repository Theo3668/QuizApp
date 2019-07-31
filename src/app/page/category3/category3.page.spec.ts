import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Category3Page } from './category3.page';

describe('Category3Page', () => {
  let component: Category3Page;
  let fixture: ComponentFixture<Category3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Category3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Category3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
