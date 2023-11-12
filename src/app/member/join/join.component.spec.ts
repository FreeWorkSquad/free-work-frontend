import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberJoinComponent} from './join.component';

describe('SimpleJoinComponent', () => {
  let component: MemberJoinComponent;
  let fixture: ComponentFixture<MemberJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberJoinComponent]
    });
    fixture = TestBed.createComponent(MemberJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
