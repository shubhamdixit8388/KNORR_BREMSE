import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiclemodelPage } from './vehiclemodel.page';

describe('VehiclemodelPage', () => {
  let component: VehiclemodelPage;
  let fixture: ComponentFixture<VehiclemodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclemodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclemodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
