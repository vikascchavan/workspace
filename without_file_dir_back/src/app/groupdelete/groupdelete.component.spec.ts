import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdeleteComponent } from './groupdelete.component';

describe('GroupdeleteComponent', () => {
  let component: GroupdeleteComponent;
  let fixture: ComponentFixture<GroupdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
