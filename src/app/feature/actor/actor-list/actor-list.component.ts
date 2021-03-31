import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  title = 'Actor List';
  actors: Actor[] = [];
  sortCriteria: string = 'id';
  sortOrder: string = 'asc';
  colClasses = 'btn btn-link font-weight-bold';

  constructor(private actorSvc: ActorService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    //if coming from login we should have an authenticated user inside sysSvc
    console.log('loggedInUser?', this.sysSvc.loggedInUser);

    // populate list of actors
    this.actorSvc.getAll().subscribe(
      (resp) => {
        this.actors = resp as Actor[];
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
