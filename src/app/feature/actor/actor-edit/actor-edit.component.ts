import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor} from 'src/app/model/actor.class';
import {ActorService} from 'src/app/service/actor.service'

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
