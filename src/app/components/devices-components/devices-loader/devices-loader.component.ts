import {Component, inject, OnInit, Type, ViewChild} from '@angular/core';
import { DevicesLoader } from './devices-loader.directive';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {HifuComponent} from 'src/app/components/devices-components/devices/hifu/hifu.component';
import {WishComponent} from 'src/app/components/devices-components/devices/wish/wish.component';
import {GuinotComponent} from 'src/app/components/devices-components/devices/guinot/guinot.component';
import {SonnextComponent} from 'src/app/components/devices-components/devices/sonnext/sonnext.component';
import {RinnovaComponent} from 'src/app/components/devices-components/devices/rinnova/rinnova.component';
import {ApolloDuetComponent} from 'src/app/components/devices-components/devices/apollo-duet/apollo-duet.component';
import {EndimedComponent} from 'src/app/components/devices-components/devices/endimed/endimed.component';
import {PlasmaComponent} from 'src/app/components/devices-components/devices/plasma/plasma.component';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';
import {MicroneedlingComponent} from 'src/app/components/devices-components/devices/microneedling/microneedling.component';
import {PortiaComponent} from 'src/app/components/devices-components/devices/portia/portia.component';
import {
  FractionalPlasmaComponent
} from 'src/app/components/devices-components/devices/fractional-plasma/fractional-plasma.component';
import {
  BioMicroneedlingComponent
} from 'src/app/components/devices-components/devices/biomicroneedling/biomicroneedling.component';
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

    public currentComponentIndex: number = 0;

    private router = inject(Router);
    private location: Location =inject(Location);
    public treatmentDataService = inject(TreatmentDataService);

    public ngOnInit(){
      this.selectedComponents = this.treatmentDataService.selectedDevices;
    }

    public moveToNextComponent(form: NgForm){
      this.dynamicHost.activateParameterSaving();
      this.currentComponentIndex += 1 ;
      if (this.currentComponentIndex > this.selectedComponents.length -1){
          this.router.navigate(['/final-stage'])
      }
    }

    public backToPreviousComponent(){
        if (this.currentComponentIndex > 0){
            this.currentComponentIndex -= 1 ;
        }
        else {
          this.location.back()
        }

    }
}
