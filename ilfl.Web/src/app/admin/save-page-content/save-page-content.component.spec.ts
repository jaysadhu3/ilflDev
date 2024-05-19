import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePageContentComponent } from './save-page-content.component';

describe('SavePageContentComponent', () => {
  let component: SavePageContentComponent;
  let fixture: ComponentFixture<SavePageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePageContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
