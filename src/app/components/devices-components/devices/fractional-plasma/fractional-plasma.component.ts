import { Component } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {PlasmaFractionalParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {PlasmaFractionalTechnics} from 'src/app/models/procedures-types';
import {KeyValuePipe} from '@angular/common';
import {MatOption} from '@angular/material/core';
import {MatFormField, MatSelect} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fractional-plasma',
  imports: [
    KeyValuePipe,
    MatOption,
    MatSelect,
    FormsModule,
    MatFormField,
  ],
  templateUrl: './fractional-plasma.component.html',
  styleUrl: './fractional-plasma.component.scss'
})
export class FractionalPlasmaComponent extends DeviceComponent<PlasmaFractionalParameters>{
  public plasmaFractionalTechnics = PlasmaFractionalTechnics;

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.FRACTIONALPLASMA;
    super.ngOnInit();
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = `\u202B ${this.deviceName}:\n תוכניות:` +
      this.parameters.technics
        .map(technic => `\u202B ${technic}`)
        .join(',')  + super.updateTreatmetProperties()

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      technics: [],
    };
  }

}
