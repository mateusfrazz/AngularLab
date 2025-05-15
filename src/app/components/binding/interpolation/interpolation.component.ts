import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
     titulo = 'Bem Vindo ao Angular'
     desc = 'Aprendendo Angular com Interpolação'
     texto = 'Texto de exemplo para interpolação'
}
