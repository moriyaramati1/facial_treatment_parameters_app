import {Component, inject, OnInit} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {Router} from '@angular/router';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';
import {GetEmployeeService} from 'src/app/services/get-employee.service';
import {Device} from 'src/app/models/device-selection';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatFormField} from '@angular/material/input';


@Component({
  selector: 'app-devices-selection',
  imports: [MatGridListModule, ReactiveFormsModule, FormsModule, MatOption, MatSelect, MatFormField],
  templateUrl: './devices-selection.component.html',
  styleUrl: './devices-selection.component.scss'
})

export class DevicesSelectionComponent implements OnInit {
  public devices: Device[] = [];
  public users?: string[];


  public treatmentDataService: TreatmentDataService = inject(TreatmentDataService);
  public getEmployeeService: GetEmployeeService = inject(GetEmployeeService);
  public router: Router = inject(Router);

  public ngOnInit() {
    const currentUser: string | null = localStorage.getItem('user');
    if (currentUser) {
      this.treatmentDataService.userName = currentUser;
    } else {
      this.loadUsers();
    }
    this.devices = this.treatmentDataService.getDevicesForSelection();
  }

  set userName(value: string) {
    this.treatmentDataService.userName = value;
    localStorage.setItem('user', value);
  }

  public moveToDevicesComponent(){
    if (!this.treatmentDataService.userName || !this.treatmentDataService.patientName) {
      alert('אנא מלאי את כל השדות');
      return;
    }

    this.router.navigate(['/devices']);
  }

  private loadUsers() {
    this.getEmployeeService.fetchEmployees().subscribe(employees => {
      this.users = employees;
    });
  }

  public logOut(){
    this.treatmentDataService.userName = '';
    localStorage.removeItem('user');
    this.loadUsers();
  }

  protected readonly length = length;
}
