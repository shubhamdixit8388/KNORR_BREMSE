import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllproductsPage } from './allproducts.page';

describe('AllproductsPage', () => {
  let component: AllproductsPage;
  let fixture: ComponentFixture<AllproductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
