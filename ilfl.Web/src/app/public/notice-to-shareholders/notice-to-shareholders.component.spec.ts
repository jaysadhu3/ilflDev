import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeToShareholdersComponent } from './notice-to-shareholders.component';

describe('NoticeToShareholdersComponent', () => {
  let component: NoticeToShareholdersComponent;
  let fixture: ComponentFixture<NoticeToShareholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeToShareholdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeToShareholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
