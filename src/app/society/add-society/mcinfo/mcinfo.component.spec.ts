import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McinfoComponent } from './mcinfo.component';

describe('McinfoComponent', () => {
  let component: McinfoComponent;
  let fixture: ComponentFixture<McinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
