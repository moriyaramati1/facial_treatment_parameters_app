import {ChangeDetectorRef, Component, inject, OnInit, Type, ViewChild} from '@angular/core';
import { DevicesLoader } from './devices-loader.directive';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import { Location } from '@angular/common';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';

@Component({
  selector: 'app-device-loader',
  imports: [DevicesLoader, FormsModule, RouterOutlet],
  templateUrl: './devices-loader.component.html',
  styleUrl: './devices-loader.component.scss'
})
export class DevicesLoaderComponent implements OnInit {
  public selectedComponents: Type<DeviceComponent<any>>[] = [];
    @ViewChild(DevicesLoader)
    public dynamicHost!: DevicesLoader;

    private router = inject(Router);
    private location: Location =inject(Location);
    public treatmentDataService = inject(TreatmentDataService);

    public ngOnInit(){
      this.selectedComponents = this.treatmentDataService.selectedDevices;
    }

    public moveToNextComponent(){
      const nextIndex = this.treatmentDataService.currentComponentIndex + 1;

      if (nextIndex < this.selectedComponents.length){
          this.dynamicHost.activateParameterSaving();
          this.treatmentDataService.currentComponentIndex += 1;
      }
      else {
        this.router.navigate(['/final-stage'])
      }
    }

    public backToPreviousComponent(){
        if (this.treatmentDataService.currentComponentIndex > 0){
            this.treatmentDataService.currentComponentIndex -= 1;
        }
        else {
          this.location.back()
        }
    }
}
