import { Component } from '@angular/core';

import { AppModule } from '@core';

import {
  SliderDirective
} from '@directives'

import {
  BtnLinkComponent,
  BtnComponent,
  FooterComponent,
  TimerComponent,
} from '@components'
const COMPONENTS = [
  BtnLinkComponent,
  BtnComponent,
  FooterComponent,
  TimerComponent,
]

import {
  BackComponent,
} from '@features'

const FEATURES = [
  BackComponent,
]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AppModule,
    BtnComponent,
    BtnLinkComponent,
    FooterComponent,
    TimerComponent,
    SliderDirective,
    ...FEATURES
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: []
})

export class HomeComponent {
}