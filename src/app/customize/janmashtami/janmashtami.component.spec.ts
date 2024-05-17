import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanmashtamiComponent } from './janmashtami.component';

describe('JanmashtamiComponent', () => {
  let component: JanmashtamiComponent;
  let fixture: ComponentFixture<JanmashtamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JanmashtamiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanmashtamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
