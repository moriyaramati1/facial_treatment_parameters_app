import {Directive, inject, OnInit} from "@angular/core";
import {DeviceNames} from 'src/app/models/devices-names';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';

@Directive()
export abstract class DeviceComponent<TParams> implements OnInit{

    public treatmentDataService = inject(TreatmentDataService);
    public deviceName!: DeviceNames;
    public parameters!: TParams;
    public material: string | undefined;

    public ngOnInit() {
      const allTreatmentParameters = this.treatmentDataService.getProperties(this.deviceName);
      if (!allTreatmentParameters) {
        this.initializeParameters();
      }
      else {
        this.material = allTreatmentParameters.material;
        this.parameters = allTreatmentParameters.parameters as TParams;
      }
    }

    public updateTreatmetProperties():string {
       if(this.material){
       return `\n\u202B חומר: ${this.material}`
      }
       return ''
    }


    constructor(){ }

    abstract initializeParameters(): void;


    abstract saveParameters(): void;
}
