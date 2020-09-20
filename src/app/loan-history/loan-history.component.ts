import { ConsultMagazineComponent } from './../consult-magazine/consult-magazine.component';
import { ConsultBookComponent } from './../consult-book/consult-book.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.css']
})
export class LoanHistoryComponent {
  data: ConsultBookComponent = new ConsultBookComponent();
  data2: ConsultMagazineComponent = new ConsultMagazineComponent();

}
