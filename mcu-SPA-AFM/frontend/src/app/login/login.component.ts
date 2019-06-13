import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie';
import {AuthService} from '../services/auth.service';
import {MovieService} from '../movies/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MovieService]
})
export class LoginComponent implements OnInit {
  movies: Movie[]
  Moviesearch: string

  constructor(private auth: AuthService , private movieService: MovieService) {
    auth.handleAuthentication();

   }

  ngOnInit() {
    
  }

  getMovie (): void {
    this.movieService.getMovie().subscribe(movies => (this.movies = movies))

}

  searchMovie (){
    if(this.Moviesearch== '' || (this.Moviesearch== undefined)){
      return this.getMovie()
    }
    else{
      this.movieService.search(this.Moviesearch).subscribe(movies => (this.movies = movies))
    }
    
}

}
