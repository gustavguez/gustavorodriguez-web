import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: any;

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferStateService  
  ) { 
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.transferState.useScullyTransferState(
      'pokemons',
      this.httpClient.get('https://pokeapi.co/api/v2/pokemon')
    ).subscribe(
      (response: any) => {
        this.pokemons = response.results;
      }
    )
  }

}
