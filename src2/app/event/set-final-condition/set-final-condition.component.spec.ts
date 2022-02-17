import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFinalConditionComponent } from './set-final-condition.component';

describe('SetFinalConditionComponent', () => {
  let component: SetFinalConditionComponent;
  let fixture: ComponentFixture<SetFinalConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetFinalConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFinalConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
