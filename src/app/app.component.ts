import { Component } from '@angular/core';import { DevicesLoaderComponent } from './components/devices_components/devices-loader/devices-loader.component'

@Component({
  selector: 'app-root',
  imports: [DevicesLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'facial_treatment_parameters';
}
