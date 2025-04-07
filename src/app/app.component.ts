import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ViewEncapsulationComponent } from "./components/view-encapsulation/view-encapsulation.component";
import { Card2Component } from "./components/card2/card2.component";

@Component({
  selector: 'app-root',
  imports: [
    ViewEncapsulationComponent,
    Card2Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularLab';
}
