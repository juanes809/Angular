import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulboComponent } from './fulbo.component';

describe('FulboComponent', () => {
  let component: FulboComponent;
  let fixture: ComponentFixture<FulboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
