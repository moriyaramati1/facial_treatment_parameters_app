import {Component, OnInit} from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {DeviceNames} from 'src/app/models/devices-names';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-portia',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './portia.component.html',
  styleUrl: './portia.component.scss'
})
export class PortiaComponent extends DeviceComponent<undefined> implements OnInit {
  public override ngOnInit(): void {
    this.deviceName = DeviceNames.PORTIA;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const treatmentParametersStr = `\u202B ${this.deviceName}:` + super.updateTreatmentProperties();
    this.treatmentDataService.setProperties(this.deviceName, { material: this.material});
    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{}

}
