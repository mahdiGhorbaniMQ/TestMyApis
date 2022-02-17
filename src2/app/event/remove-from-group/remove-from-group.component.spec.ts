import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromGroupComponent } from './remove-from-group.component';

describe('RemoveFromGroupComponent', () => {
  let component: RemoveFromGroupComponent;
  let fixture: ComponentFixture<RemoveFromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFromGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
