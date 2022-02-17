import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConditionComponent } from './get-condition.component';

describe('GetConditionComponent', () => {
  let component: GetConditionComponent;
  let fixture: ComponentFixture<GetConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
