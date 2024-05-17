import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremanagementComponent } from './storemanagement.component';

describe('StoremanagementComponent', () => {
  let component: StoremanagementComponent;
  let fixture: ComponentFixture<StoremanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoremanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoremanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
