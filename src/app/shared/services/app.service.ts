import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public service_cards = [
    {
      description: 'Oferecemos soluções personalizadas para otimizar a gestão do seu Agronegócio.',
      img: 'assets/images/service-card/card-1.jpg',
      title: 'Contabilidade especializada para seu Agronegócio',
    },
    {
      description: 'Nossa equipe especializada te ajuda a entender a legislação e manter sua empresa em dia com as obrigações fiscais.',
      img: 'assets/images/service-card/card-2.jpg',
      title: 'Tributação do agronegócio descomplicada',
    },
    {
      description: 'Nossos especialistas te auxiliam a controlar o fluxo de caixa, analisar investimentos e planejar o futuro do seu negócio.',
      img: 'assets/images/service-card/card-3.jpg',
      title: 'Gestão financeira para o agronegócio',
    },
  ]

  public service_cards2 = [
    {
      description: 'Oferecemos soluções personalizadas para otimizar a gestão do seu Agronegócio.',
      img: 'assets/images/service-card/card-4.png',
      title: 'Contabilidade especializada para seu Agronegócio',
    },
    {
      description: 'Nossa equipe especializada te ajuda a entender a legislação e manter sua empresa em dia com as obrigações fiscais.',
      img: 'assets/images/service-card/card-5.png',
      title: 'Tributação do agronegócio descomplicada',
    },
    {
      description: 'Nossos especialistas te auxiliam a controlar o fluxo de caixa, analisar investimentos e planejar o futuro do seu negócio.',
      img: 'assets/images/service-card/card-6.png',
      title: 'Gestão financeira para o agronegócio',
    },
  ]
}