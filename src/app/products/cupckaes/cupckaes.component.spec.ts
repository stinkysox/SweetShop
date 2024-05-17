import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupckaesComponent } from './cupckaes.component';

describe('CupckaesComponent', () => {
  let component: CupckaesComponent;
  let fixture: ComponentFixture<CupckaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CupckaesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupckaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
