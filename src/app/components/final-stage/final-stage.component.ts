import { Component } from '@angular/core';
import {PostInformationService} from 'src/app/services/post-information.service';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';

@Component({
  selector: 'app-final-stage',
  imports: [],
  templateUrl: './final-stage.component.html',
  styleUrl: './final-stage.component.scss'
})
export class FinalStageComponent {

  constructor(public postInformationService: PostInformationService,
              private treatmentDataService: TreatmentDataService ) {}

  public sendData(): void {
    this.postInformationService.sendData(this.treatmentDataService.getData())
      .subscribe(response => {
        if (response) {
          alert("הנתונים נשלחו בהצלחה!");
        }
      });
  }
}
