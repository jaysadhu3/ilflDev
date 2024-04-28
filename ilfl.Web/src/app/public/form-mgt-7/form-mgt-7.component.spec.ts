import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMgt7Component } from './form-mgt-7.component';

describe('FormMgt7Component', () => {
  let component: FormMgt7Component;
  let fixture: ComponentFixture<FormMgt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMgt7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMgt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
