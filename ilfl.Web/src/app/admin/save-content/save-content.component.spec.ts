import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveContentComponent } from './save-content.component';

describe('SaveContentComponent', () => {
  let component: SaveContentComponent;
  let fixture: ComponentFixture<SaveContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
