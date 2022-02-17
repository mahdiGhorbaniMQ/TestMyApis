import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConditoinComponent } from './set-conditoin.component';

describe('SetConditoinComponent', () => {
  let component: SetConditoinComponent;
  let fixture: ComponentFixture<SetConditoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetConditoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConditoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
