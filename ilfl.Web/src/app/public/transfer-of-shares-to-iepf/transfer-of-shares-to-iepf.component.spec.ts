import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOfSharesToIEPFComponent } from './transfer-of-shares-to-iepf.component';

describe('TransferOfSharesToIEPFComponent', () => {
  let component: TransferOfSharesToIEPFComponent;
  let fixture: ComponentFixture<TransferOfSharesToIEPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferOfSharesToIEPFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferOfSharesToIEPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
