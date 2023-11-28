import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulbitoComponent } from './fulbito.component';

describe('FulbitoComponent', () => {
  let component: FulbitoComponent;
  let fixture: ComponentFixture<FulbitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulbitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulbitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
