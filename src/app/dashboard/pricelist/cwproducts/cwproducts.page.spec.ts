import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CwproductsPage } from './cwproducts.page';

describe('CwproductsPage', () => {
  let component: CwproductsPage;
  let fixture: ComponentFixture<CwproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CwproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
