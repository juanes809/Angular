import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelpageComponent } from './marvelpage.component';

describe('MarvelpageComponent', () => {
  let component: MarvelpageComponent;
  let fixture: ComponentFixture<MarvelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarvelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
