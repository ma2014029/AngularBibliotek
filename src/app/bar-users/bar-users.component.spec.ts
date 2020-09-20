import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUsersComponent } from './bar-users.component';

describe('BarUsersComponent', () => {
  let component: BarUsersComponent;
  let fixture: ComponentFixture<BarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
