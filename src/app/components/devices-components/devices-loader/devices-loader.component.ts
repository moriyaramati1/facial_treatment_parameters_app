import { Component, inject, Type, ViewChild } from '@angular/core';
import { DeviceComponent } from 'src/app/components/devices_components/device-component'
import { DevicesLoader } from './devices-loader.directive';
import { Router } from '@angular/router';
import {SonnextComponent} from 'src/app/components/devices_components/devices/sonnext/sonnext.component';
import {GuinotComponent} from 'src/app/components/devices_components/devices/guinot/guinot.component';
import {RinnovaComponent} from 'src/app/components/devices_components/devices/rinnova/rinnova.component';
import {ApolloDuetComponent} from 'src/app/components/devices_components/devices/apollo-duet/apollo-duet.component';
import {PlasmaComponent} from 'src/app/components/devices_components/devices/plasma/plasma.component';
import {AndimedComponent} from 'src/app/components/devices_components/devices/andimed/andimed.component';
import {WishComponent} from 'src/app/components/devices_components/devices/wish/wish.component';
import {HifuComponent} from 'src/app/components/devices_components/devices/hifu/hifu.component';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-device-loader',
  imports: [DevicesLoader, FormsModule],
  templateUrl: './devices-loader.component.html',
  styleUrl: './devices-loader.component.scss'
})
export class DevicesLoaderComponent{
  public selectedComponents: Type<DeviceComponent<any>>[] = [
    HifuComponent,
    WishComponent,
    SonnextComponent,
    GuinotComponent,
    RinnovaComponent,
    ApolloDuetComponent,
    PlasmaComponent,
    AndimedComponent
  ];
    @ViewChild(DevicesLoader)
    private dynamicHost!: DevicesLoader;

    public currentComponentIndex: number = 0;

    private router = inject(Router);


    public moveToNextComponent(form: NgForm){
      console.log(form)
      if (form.valid) {
        this.dynamicHost.activateParmeterSaving();
        if (this.currentComponentIndex < this.selectedComponents.length){
          this.currentComponentIndex += 1 ;
        }
        else {
          this.router.navigate(['/final-stage'])
        }
      } else {
        alert('fill props')
      }
    }

    public backToPreviousComponent(){
        if (this.currentComponentIndex > 0){
            this.currentComponentIndex -= 1 ;
        }
        else {
            this.router.navigate([''])
        }

    }
}
