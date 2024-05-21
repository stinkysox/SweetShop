import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsbikesComponent } from './carsbikes.component';

describe('CarsbikesComponent', () => {
  let component: CarsbikesComponent;
  let fixture: ComponentFixture<CarsbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
