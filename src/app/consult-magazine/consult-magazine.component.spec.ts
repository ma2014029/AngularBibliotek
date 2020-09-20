import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMagazineComponent } from './consult-magazine.component';

describe('ConsultMagazineComponent', () => {
  let component: ConsultMagazineComponent;
  let fixture: ComponentFixture<ConsultMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultMagazineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
