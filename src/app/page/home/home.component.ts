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

import { AppService } from '@services';

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
  providers: [AppService]
})

export class HomeComponent {

  constructor (
    private AppService: AppService
  ) { }

  public service_cards = this.AppService.service_cards;
  public service_cards2 = this.AppService.service_cards2;

}