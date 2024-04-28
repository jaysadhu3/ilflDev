import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVotingResultsComponent } from './e-voting-results.component';

describe('EVotingResultsComponent', () => {
  let component: EVotingResultsComponent;
  let fixture: ComponentFixture<EVotingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EVotingResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVotingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
