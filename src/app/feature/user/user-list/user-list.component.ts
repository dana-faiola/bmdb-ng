import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../../model/user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  title = 'User List';
  users: User[] = [];
  sortCriteria: string = 'id';
  sortOrder: string = 'asc';
  colClasses = 'btn btn-link font-weight-bold';

  constructor(private userSvc: UserService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    console.log('loggedInUser?', this.sysSvc.loggedInUser);
    // populate list of users
    this.userSvc.getAll().subscribe(
      (resp) => {
        this.users = resp as User[];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  sortBy(column: string): void {

    if (column == this.sortCriteria) {
      this.sortOrder = this.sortOrder == 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = column;
  }
}
