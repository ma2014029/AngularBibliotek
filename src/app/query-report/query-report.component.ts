import { ConsultMagazineComponent } from './../consult-magazine/consult-magazine.component';
import { ConsultBookComponent } from './../consult-book/consult-book.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-report',
  templateUrl: './query-report.component.html',
  styleUrls: ['./query-report.component.css']
})
export class QueryReportComponent {

  data: ConsultBookComponent = new ConsultBookComponent();
  data2: ConsultMagazineComponent = new ConsultMagazineComponent();

}
