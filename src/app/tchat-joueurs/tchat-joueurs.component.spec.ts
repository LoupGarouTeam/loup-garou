import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatJoueursComponent } from './tchat-joueurs.component';

describe('TchatJoueursComponent', () => {
  let component: TchatJoueursComponent;
  let fixture: ComponentFixture<TchatJoueursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatJoueursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
