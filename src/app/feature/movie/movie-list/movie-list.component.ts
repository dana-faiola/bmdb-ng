import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';
import { Movie } from '../../../model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  title = 'Movie List';
  movies: Movie[] = [];
  sortCriteria: string = 'id';
  sortOrder: string = 'asc';
  colClasses = 'btn btn-link font-weight-bold';

  constructor(private movieSvc: MovieService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    //if coming from login we should have an authenticated user inside sysSvc
    console.log('loggedInUser?', this.sysSvc.loggedInUser);
    // populate list of movies
    this.movieSvc.getAll().subscribe(
      (resp) => {
        this.movies = resp as Movie[];
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
