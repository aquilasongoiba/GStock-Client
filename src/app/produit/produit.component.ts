import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProduitServiceService } from '../services/produit-service.service';
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit, OnDestroy {
//
 public produit: Produit[];
  constructor(private produitService: ProduitServiceService) {

   }

  //
  ngOnInit() {
    this.produit = this.produitService.getProduits();
  }
  //
  ngOnDestroy() {
  }

}
