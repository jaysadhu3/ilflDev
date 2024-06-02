import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateOverviewComponent } from './corporate-overview.component';

describe('CorporateOverviewComponent', () => {
  let component: CorporateOverviewComponent;
  let fixture: ComponentFixture<CorporateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
