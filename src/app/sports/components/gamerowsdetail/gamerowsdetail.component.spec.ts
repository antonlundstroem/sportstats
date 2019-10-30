import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerowsdetailComponent } from './gamerowsdetail.component';

describe('GamerowsdetailComponent', () => {
  let component: GamerowsdetailComponent;
  let fixture: ComponentFixture<GamerowsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerowsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerowsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
