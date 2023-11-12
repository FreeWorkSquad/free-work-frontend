import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleJoinComponent} from './simple-join.component';

describe('SimpleJoinComponent', () => {
  let component: SimpleJoinComponent;
  let fixture: ComponentFixture<SimpleJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleJoinComponent]
    });
    fixture = TestBed.createComponent(SimpleJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
