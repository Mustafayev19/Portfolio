import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // DÜZƏLİŞ: Yan panel (sidebar) animasiyası geri qaytarıldı
    trigger('navbarVisibility', [
      state('visible', style({ transform: 'translateX(0%)', opacity: 1 })),
      state(
        'hiddenLeft',
        style({ transform: 'translateX(-100%)', opacity: 0 })
      ),
      state(
        'hiddenRight',
        style({ transform: 'translateX(100%)', opacity: 0 })
      ),
      transition('visible => hiddenLeft', [
        animate('300ms cubic-bezier(0.55, 0.055, 0.675, 0.19)'),
      ]),
      transition('visible => hiddenRight', [
        animate('300ms cubic-bezier(0.55, 0.055, 0.675, 0.19)'),
      ]),
      transition('hiddenLeft => visible', [
        animate(
          '700ms cubic-bezier(0.23, 1, 0.32, 1)',
          keyframes([
            style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateX(-100%)', opacity: 0, offset: 0.5 }),
            style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
      transition('hiddenRight => visible', [
        animate(
          '700ms cubic-bezier(0.23, 1, 0.32, 1)',
          keyframes([
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0.5 }),
            style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    // DÜZƏLİŞ: Ana səhifə məzmununun (şəkil və s.) animasiyası geri qaytarıldı
    trigger('homePageContentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '400ms 400ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
    ]),
    // Səhifə keçid animasiyası olduğu kimi qalır
    trigger('routeWrapperAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' }),
        animate(
          '400ms 300ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '350ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' })
        ),
      ]),
    ]),
    // mobileMenuAnimation is intentionally removed for simplification
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('menuButton') menuButton!: ElementRef;

  title = 'Mobil Mustafayev';
  isHomePage = true;
  isMobileMenuOpen: boolean = false;
  private destroy$ = new Subject<void>();

  // Animasiya dəyişənləri
  textToDisplay: string = '';
  private phrases: string[] = [
    'a passionate Full-Stack Developer.',
    'a highly skilled Angular Developer.',
    'Building robust APIs with Nest.js.',
    'Developing End-to-End Solutions.',
  ];
  private phraseIndex: number = 0;
  private typingTimeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Router eventlərini izləmək üçün
    this.isHomePage = this.router.url === '/';
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          this.isHomePage = event.urlAfterRedirects === '/';
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // Animasiyanı burada başlatmaq daha etibarlıdır
    this.startTypewriter();
  }

  startTypewriter(): void {
    // Əvvəlki animasiyanı təmizləyirik (əgər varsa)
    clearTimeout(this.typingTimeout);
    this.typePhrase(this.phrases[this.phraseIndex]);
  }

  private typePhrase(phrase: string, charIndex: number = 0): void {
    // Yazma prosesi
    if (charIndex < phrase.length) {
      this.textToDisplay = phrase.substring(0, charIndex + 1);
      this.typingTimeout = setTimeout(() => {
        this.typePhrase(phrase, charIndex + 1);
      }, 120);
    } else {
      // Yazıb bitirdikdən sonra silməyə başla
      this.typingTimeout = setTimeout(() => {
        this.deletePhrase(phrase, phrase.length);
      }, 2000); // Gözləmə müddəti
    }
  }

  private deletePhrase(phrase: string, charIndex: number): void {
    // Silmə prosesi
    if (charIndex > 0) {
      this.textToDisplay = phrase.substring(0, charIndex - 1);
      this.typingTimeout = setTimeout(() => {
        this.deletePhrase(phrase, charIndex - 1);
      }, 60);
    } else {
      // Silib bitirdikdən sonra növbəti sözə keç
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.typingTimeout = setTimeout(() => {
        this.startTypewriter();
      }, 500);
    }
  }

  navigateWithEffect(path: string): void {
    this.router.navigate([path]);
  }

  navigateAndCloseMenu(route: string): void {
    this.navigateWithEffect(route);
    this.isMobileMenuOpen = false;

    if (this.menuButton) {
      this.menuButton.nativeElement.blur();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // Komponent məhv ediləndə timeout-u təmizləyirik
    clearTimeout(this.typingTimeout);
  }
}
