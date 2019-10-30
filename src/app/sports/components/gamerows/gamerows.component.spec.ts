import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerowsComponent } from './gamerows.component';

describe('GamerowsComponent', () => {
  let component: GamerowsComponent;
  let fixture: ComponentFixture<GamerowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
