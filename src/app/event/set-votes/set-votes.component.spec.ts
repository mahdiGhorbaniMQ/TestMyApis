import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetVotesComponent } from './set-votes.component';

describe('SetVotesComponent', () => {
  let component: SetVotesComponent;
  let fixture: ComponentFixture<SetVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetVotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
