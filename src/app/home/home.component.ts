import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: any;

  constructor(
    private httpClient: HttpClient ) { 
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon').subscribe(
      (response: any) => {
        this.pokemons = response.results;
      }
    )
  }

}
