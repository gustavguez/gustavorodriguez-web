import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  pokemon: any;

  constructor(
    private httpClient: HttpClient,
    private transferState: TransferStateService
  ) { 
    this.pokemon = null;
  }

  ngOnInit(): void {
    this.transferState.useScullyTransferState(
      'pokemons/1',
      this.httpClient.get('https://pokeapi.co/api/v2/pokemon/1')
    ).subscribe(
      (response: any) => {
        this.pokemon = response;
      }
    )
  }

}
