import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricelistPage } from './pricelist.page';

describe('PricelistPage', () => {
  let component: PricelistPage;
  let fixture: ComponentFixture<PricelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
