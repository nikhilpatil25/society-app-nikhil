import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocinfoComponent } from './docinfo.component';

describe('DocinfoComponent', () => {
  let component: DocinfoComponent;
  let fixture: ComponentFixture<DocinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
