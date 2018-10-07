import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersAdministrationComponent} from './users-administration.component';

describe('UsersNewsComponent', () => {
  let component: UsersAdministrationComponent;
  let fixture: ComponentFixture<UsersAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersAdministrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
