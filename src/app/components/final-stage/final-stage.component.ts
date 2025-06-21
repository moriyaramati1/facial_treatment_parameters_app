import {Component, inject, OnInit} from '@angular/core';
import {PostInformationService} from 'src/app/services/post-information.service';
import {TreatmentDataService} from 'src/app/services/treatment-data.service';
import {Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-final-stage',
  imports: [
    FormsModule
  ],
  templateUrl: './final-stage.component.html',
  styleUrl: './final-stage.component.scss'
})
export class FinalStageComponent implements OnInit {
  public location: Location = inject(Location);
  public router = inject(Router);
  public postInformationService: PostInformationService = inject(PostInformationService);
  public treatmentDataService: TreatmentDataService = inject(TreatmentDataService);
  public isSendEnabled: boolean = false;

  public ngOnInit() {
    if(!this.treatmentDataService.treatmentReport){
      this.treatmentDataService.treatmentReport = {
        notes: '',
        anesthetic: '',
        reaction: ''
      }
    }
  }

  public sendData(): void {
    this.isSendEnabled = true;
    this.postInformationService.sendData(this.treatmentDataService.getData())
      .subscribe(response => {
        this.isSendEnabled = false;
        if (response) {
          alert("הנתונים נשלחו בהצלחה!")
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          })

        }
      });
  }
}
