import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Category2Page } from './category2.page';

describe('Category2Page', () => {
  let component: Category2Page;
  let fixture: ComponentFixture<Category2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Category2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Category2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
