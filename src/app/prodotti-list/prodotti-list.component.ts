import { Component } from '@angular/core';
import { TProdotto } from '../modello/prodotto';
import { PRODOTTI } from '../dati/prodotti';

@Component({
  selector: 'app-prodotti-list',
  templateUrl: './prodotti-list.component.html',
  styleUrl: './prodotti-list.component.css'
})
export class ProdottiListComponent {
prodotti:TProdotto[] = PRODOTTI
}
