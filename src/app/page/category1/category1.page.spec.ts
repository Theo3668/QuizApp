import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Category1Page } from './category1.page';

describe('Category1Page', () => {
  let component: Category1Page;
  let fixture: ComponentFixture<Category1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Category1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Category1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
