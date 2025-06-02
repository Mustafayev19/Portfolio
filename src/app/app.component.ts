import { Component, OnDestroy, OnInit } from '@angular/core';
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
    trigger('mobileMenuAnimation', [
      // BU ANİMASİYANI ƏLAVƏ EDİN
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20%)', // Və ya istədiyiniz başqa bir effekt
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
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
            style({ transform: 'translateX(-100%)', opacity: 0, offset: 0.5 }), // ~350ms delay (routeWrapperAnimation:leave bitənə qədər)
            style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
      transition('hiddenRight => visible', [
        animate(
          '700ms cubic-bezier(0.23, 1, 0.32, 1)',
          keyframes([
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0.5 }), // ~350ms delay
            style({ transform: 'translateX(0%)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('homePageContentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '400ms 400ms cubic-bezier(0.23, 1, 0.32, 1)', // 400ms delay (navbarlar görünməyə başladıqdan sonra)
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
    trigger('routeWrapperAnimation', [
      // Alt səhifə konteyneri üçün
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' }),
        // Gecikmə: Navbarlar (300ms) və homePageContentAnimation:leave (250ms) bitənə qədər. Ən uzunu 300ms.
        animate(
          '400ms 300ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        // Bu müddət, alt səhifənin (məsələn, AboutComponent) öz daxili :leave animasiyasının
        // (əgər 300ms idisə) tamamilə bitməsi üçün kifayət etməlidir.
        animate(
          '350ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isHomePage = true;
  isMobileMenuOpen: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
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
  }

  navigateWithEffect(path: string): void {
    this.router.navigate([path]);
  }
  navigateAndCloseMenu(route: string) {
    this.navigateWithEffect(route);
    this.isMobileMenuOpen = false;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
