import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public router = inject(Router);
  title = 'facial_treatment_parameters';

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}
