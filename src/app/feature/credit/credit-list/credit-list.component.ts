import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/service/credit.service';
import { Credit } from '../../../model/credit.class';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css'],
})
export class CreditListComponent implements OnInit {
  title = 'Credit List';
  credits: Credit[] = [];

  constructor(private creditSvc: CreditService) {}

  ngOnInit(): void {
    // populate list of credits
    this.creditSvc.getAll().subscribe(
      (resp) => {
        this.credits = resp as Credit[];
        console.log('Credits', this.credits);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
