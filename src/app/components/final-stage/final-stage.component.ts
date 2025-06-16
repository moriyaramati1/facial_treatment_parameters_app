import {Component, inject} from '@angular/core';
import {PostInformationService} from 'src/app/services/post-information.service';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-final-stage',
  imports: [],
  templateUrl: './final-stage.component.html',
  styleUrl: './final-stage.component.scss'
})
export class FinalStageComponent {
  public location: Location =inject(Location);
  public postInformationService: PostInformationService = inject(PostInformationService);
  public treatmentDataService: TreatmentDataService = inject(TreatmentDataService);
  public isSendEnabled: boolean = true;

  public sendData(): void {
    this.isSendEnabled = false;
    this.postInformationService.sendData(this.treatmentDataService.getData())
      .subscribe(response => {
        this.isSendEnabled = true;
        if (response) {
          alert("הנתונים נשלחו בהצלחה!");
        }
      });
  }
}
