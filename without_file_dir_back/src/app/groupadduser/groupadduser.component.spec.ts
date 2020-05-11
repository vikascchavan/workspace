import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupadduserComponent } from './groupadduser.component';

describe('GroupadduserComponent', () => {
  let component: GroupadduserComponent;
  let fixture: ComponentFixture<GroupadduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupadduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupadduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
