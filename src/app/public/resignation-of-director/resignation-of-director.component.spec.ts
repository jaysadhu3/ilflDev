import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationOfDirectorComponent } from './resignation-of-director.component';

describe('ResignationOfDirectorComponent', () => {
  let component: ResignationOfDirectorComponent;
  let fixture: ComponentFixture<ResignationOfDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResignationOfDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResignationOfDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
