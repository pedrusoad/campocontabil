import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrivacidadeCardComponent } from './shared/components/privacidade-card/privacidade-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrivacidadeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public isScrolled: string = '';

  constructor() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY < 100) {
      this.isScrolled = '';
    } else if (window.scrollY >= 100 && window.scrollY < 200) {
      this.isScrolled = 'scrolled-sm';
    } else {
      this.isScrolled = 'scrolled-lg';
    }
  }

  ngOnInit(): void {
    setTimeout(() => {

      const observer = new IntersectionObserver(entries => {
        Array.from(entries).forEach(entry => {
          if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
          }
        })
      }, {
        threshold: 1
      })

      Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
        observer.observe(element)
      })
    }, 200);

  }
}