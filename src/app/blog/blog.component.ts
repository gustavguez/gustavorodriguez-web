import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  pokemon: any;

  constructor(
    private httpClient: HttpClient ) { 
    this.pokemon = null;
  }

  ngOnInit(): void {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon/1').subscribe(
      (response: any) => {
        this.pokemon = response;
      }
    )
  }

}
