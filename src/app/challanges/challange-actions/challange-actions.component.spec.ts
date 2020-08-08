import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeActionsComponent } from './challange-actions.component';

describe('ChallangeActionsComponent', () => {
  let component: ChallangeActionsComponent;
  let fixture: ComponentFixture<ChallangeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallangeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
