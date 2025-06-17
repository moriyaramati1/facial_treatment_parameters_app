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
  public isSendEnabled: boolean = false;

  public sendData(): void {
    this.isSendEnabled = true;
    console.log('this.treatmentDataService.getData()',this.treatmentDataService.getData())
    this.postInformationService.sendData(this.treatmentDataService.getData())
      .subscribe(response => {
        this.isSendEnabled = false;
        if (response) {
          alert("הנתונים נשלחו בהצלחה!");
        }
      });
  }
}
