import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  imports: [],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation: ViewEncapsulation.None //ao informar o none o css desse component se torna global
})
export class ViewEncapsulationComponent {
  
}
