import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuserpwdComponent } from './impuserpwd.component';

describe('ImpuserpwdComponent', () => {
  let component: ImpuserpwdComponent;
  let fixture: ComponentFixture<ImpuserpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuserpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuserpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
