import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ViewEncapsulationComponent } from './components/binding/view-encapsulation/view-encapsulation.component';
import { CommonModule } from '@angular/common';
import { EventBindingComponent } from './components/binding/event-binding/event-binding.component';
import { InterpolationComponent } from './components/binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/binding/property-binding/property-binding.component';

export interface IAppComponent {
  title: string;
  img: string;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, InterpolationComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  imageslayout: IAppComponent[] = [
    {
      title: 'Angular',
      img: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      title: 'React',
      img: 'https://reactjs.org/logo-og.png',
    },
    {
      title: 'Vue',
      img: 'https://vuejs.org/images/logo.png',
    },
    {
      title: 'Svelte',
      img: 'https://svelte.dev/svelte-logo-horizontal.svg',
    },
    {
      title: 'Ember',
      img: 'https://emberjs.com/images/ember_logo.png',
    },
    {
      title: 'Backbone',
      img: 'https://backbonejs.org/backbone.png',
    },
    {
      title: 'jQuery',
      img: 'https://jquery.com/jquery-logo.svg',
    },
    {
      title: 'Bootstrap',
      img: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg',
    },
    {
      title: 'Tailwind CSS',
      img: 'https://tailwindcss.com/_next/static/media/logo.2c4b8f3a.svg',
    },
    {
      title: 'Bulma',
      img: 'https://bulma.io/images/bulma-logo-white.png',
    },
    {
      title: 'Foundation',
      img: 'https://get.foundation/sites/docs/assets/img/foundation-logo.png',
    },
  ];

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
