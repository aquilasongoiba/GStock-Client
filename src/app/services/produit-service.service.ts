import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  //
 private produit: Produit[] = [];

  constructor() {
// CONSTRUCTOR
    let p1 = new Produit('Livre', 50, 20);
    let p2 = new Produit('Livre', 200, 5.25);
    let p3 = new Produit('Livre', 500, 2.10);
    // pusher dans la tab produits
    this.produit.push(p1);
    this.produit.push(p2);
    this.produit.push(p3);
  }
// listes des produits
  public getProduits(): Produit[] {
      return this.produit;
  }

}
