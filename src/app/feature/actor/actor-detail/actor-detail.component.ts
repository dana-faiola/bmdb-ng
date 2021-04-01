import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
})
export class ActorDetailComponent implements OnInit {
  title = 'Actor Detail';
  actor: Actor = null;
  actorId: number = 0;

  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe((parms) => {
      this.actorId = parms['id'];
    });
    // get actor by id
    this.actorSvc.getById(this.actorId).subscribe(
      (resp) => {
        this.actor = resp as Actor;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete() {
    // delete the actor
    this.actorSvc.delete(this.actor.id).subscribe(
      (resp) => {
        this.actor = resp as Actor;
        // forward to the actor list component
        this.router.navigateByUrl('/actor-list');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
