import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottiF } from './prodottiF.model';
@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  ProdottiFData : ProdottiF[];
  oFoo : Observable<ProdottiF[]>;
  constructor(public http: HttpClient) { }
  data: Object;

  makeTypedRequest() : void
  {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oFoo = this.http.get<ProdottiF[]>('https://3000-c372063f-c04d-4ca0-b198-6fb0f393d3fd.ws-eu01.gitpod.io/api/products');
    this.oFoo.subscribe(data => {this.ProdottiFData = data;});
  }

   ngOnInit() {
  }
}
