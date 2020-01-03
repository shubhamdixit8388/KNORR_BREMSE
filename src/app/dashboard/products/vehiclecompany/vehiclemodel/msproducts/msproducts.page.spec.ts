import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MsproductsPage } from './msproducts.page';

describe('MsproductsPage', () => {
  let component: MsproductsPage;
  let fixture: ComponentFixture<MsproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MsproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
