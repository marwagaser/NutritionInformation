import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesInfoComponent } from './calories-info.component';

describe('CaloriesInfoComponent', () => {
  let component: CaloriesInfoComponent;
  let fixture: ComponentFixture<CaloriesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
