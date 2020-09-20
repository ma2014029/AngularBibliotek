import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQueryUserComponent } from './search-query-user.component';

describe('SearchQueryUserComponent', () => {
  let component: SearchQueryUserComponent;
  let fixture: ComponentFixture<SearchQueryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchQueryUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQueryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
