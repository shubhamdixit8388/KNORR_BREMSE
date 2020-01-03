import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiclecompanyPage } from './vehiclecompany.page';

describe('VehiclecompanyPage', () => {
  let component: VehiclecompanyPage;
  let fixture: ComponentFixture<VehiclecompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclecompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclecompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
