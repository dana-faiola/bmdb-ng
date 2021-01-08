import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmdb-ng';
  // create an array named movies and populate with some movies
  movies = ["Return of the Living Dead", "The Princess Bride", "Monty Python and the Holy Grail", "The Evil Dead", "The Shining"];
}
