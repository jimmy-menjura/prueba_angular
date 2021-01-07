import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoImagenesPage } from './info-imagenes.page';

describe('InfoImagenesPage', () => {
  let component: InfoImagenesPage;
  let fixture: ComponentFixture<InfoImagenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoImagenesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoImagenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
