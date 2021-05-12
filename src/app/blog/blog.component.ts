import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private transferState: TransferStateService
  ) { 
    this.pokemon = null;
  }

  ngOnInit(): void {
    const name: string = this.activatedRoute.snapshot.params.id;
    this.transferState.useScullyTransferState(
      'pokemons/' + name,
      this.httpClient.get('https://pokeapi.co/api/v2/pokemon/' + name)
    ).subscribe(
      (response: any) => {
        this.pokemon = response;
      }
    )
  }

}
