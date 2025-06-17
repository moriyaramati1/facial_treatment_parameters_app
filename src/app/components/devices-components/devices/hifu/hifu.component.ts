import { Component } from '@angular/core';
import {HifuParameters} from 'src/app/models/devices-parameters';
import {DeviceNames} from 'src/app/models/devices-names';
import {BoosterHandlers, HifuHandles} from 'src/app/models/handles';
import {KeyValuePipe} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {ReplaySubject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-hifu',
  imports: [
    FormsModule,
    KeyValuePipe,
    ReactiveFormsModule,
    MatOption,
    MatSelect,
    MatFormField,
  ],
  templateUrl: './hifu.component.html',
  styleUrl: './hifu.component.scss'
})
export class HifuComponent extends DeviceComponent<HifuParameters>{
  public hifuHandles = HifuHandles;
  public materialRequired: boolean = false;

  handlesList = Object.entries(this.hifuHandles).map(([key, value]) => ({
    key,
    value,
  }));
  handlesCtrl = new FormControl([]);
  handlesFilterCtrl = new FormControl('');

  filteredHandles: ReplaySubject<any[]> = new ReplaySubject(1);

  public override ngOnInit(): void {
    this.deviceName = DeviceNames.HIFU;
    super.ngOnInit();

    this.filteredHandles.next(this.handlesList);

    this.handlesFilterCtrl.valueChanges.pipe(takeUntil(new ReplaySubject())).subscribe(() => {
      const search = this.handlesFilterCtrl.value?.toLowerCase() || '';
      this.filteredHandles.next(
        this.handlesList.filter(h =>
          h.value.toString().toLowerCase().includes(search)
        )
      );
    });
  }

  public saveParameters(): void{
    const allParameters = { parameters: this.parameters, material: this.material };
    this.treatmentDataService.setProperties(this.deviceName,allParameters);

    const treatmentParametersStr = `\u202B ${this.deviceName}:\n ידיות:` +
      this.parameters.handles
        .map(handle => `\u202B ${handle}`)
        .join(',') +
    `\n עוצמה: ${this.parameters.intensity}` + super.updateTreatmetProperties()

    this.treatmentDataService.setData(this.deviceName, treatmentParametersStr);
  }

  public initializeParameters(): void{
    this.parameters = {
      handles: [],
      intensity: undefined,
    };
  }

  public computeRequired(): void {
    this.materialRequired = this.parameters.handles.some((handle) => BoosterHandlers.includes(handle));
    console.log('computeRequired',this.materialRequired)

  }

}
