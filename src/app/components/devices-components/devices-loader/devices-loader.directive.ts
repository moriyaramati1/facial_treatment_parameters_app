import {  Directive, input, Type,InputSignal, ViewContainerRef, effect, ComponentRef } from '@angular/core';
import {DeviceComponent} from 'src/app/components/devices-components/device-component';

@Directive({
 selector: '[appDynamicChildLoader]',
 standalone: true
})
export class DevicesLoader {
 public component: InputSignal<Type<DeviceComponent<any>> | undefined> =
    input<Type<DeviceComponent<any>> | undefined>(undefined);  public componentRef!: ComponentRef<any>;

  constructor(public viewContainerRef: ViewContainerRef){
    effect(()=>{
      const component = this.component();
      this.viewContainerRef.clear();
      if (component) {
        this.componentRef = this.viewContainerRef.createComponent(component);
      }
    })
  }

   public activateParmeterSaving() {
    const instance = this.componentRef?.instance;
    return instance.saveParameters()
  }


}
