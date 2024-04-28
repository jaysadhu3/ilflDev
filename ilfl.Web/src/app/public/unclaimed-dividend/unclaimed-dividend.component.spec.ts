import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclaimedDividendComponent } from './unclaimed-dividend.component';

describe('UnclaimedDividendComponent', () => {
  let component: UnclaimedDividendComponent;
  let fixture: ComponentFixture<UnclaimedDividendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnclaimedDividendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnclaimedDividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
