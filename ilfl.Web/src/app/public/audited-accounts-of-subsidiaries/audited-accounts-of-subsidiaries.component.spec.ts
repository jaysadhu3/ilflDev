import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditedAccountsOfSubsidiariesComponent } from './audited-accounts-of-subsidiaries.component';

describe('AuditedAccountsOfSubsidiariesComponent', () => {
  let component: AuditedAccountsOfSubsidiariesComponent;
  let fixture: ComponentFixture<AuditedAccountsOfSubsidiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditedAccountsOfSubsidiariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditedAccountsOfSubsidiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
