import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoChatPage } from './info-chat.page';

describe('InfoChatPage', () => {
  let component: InfoChatPage;
  let fixture: ComponentFixture<InfoChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
