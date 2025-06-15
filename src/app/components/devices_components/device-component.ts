import { inject } from "@angular/core";
import {DeviceNames} from 'src/app/models/devices-names';
import {TreatmentDataServiceService} from 'src/app/services/treatment-data-service.service';

export abstract class DeviceComponent<TParams> {

    public treatmentDataService = inject(TreatmentDataServiceService);
    public deviceName!: DeviceNames;
    public parameters!: TParams;
    public material: string | undefined;

    public updateTreatmetProperties():string {
     if(this.material){
        return `\n \u202B חומר: ${this.material}`
      }
       return ''
    }


    constructor(){ }

    abstract initializeParameters(): void;


    abstract saveParameters(): void;
}
