import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFinalPage } from './results-final.page';

describe('ResultsFinalPage', () => {
  let component: ResultsFinalPage;
  let fixture: ComponentFixture<ResultsFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsFinalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
