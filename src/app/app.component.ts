import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('navbarVisibility', [
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      state(
        'hiddenLeft',
        style({ transform: 'translateX(-100%)', opacity: 0 })
      ),
      state(
        'hiddenRight',
        style({ transform: 'translateX(100%)', opacity: 0 })
      ),
      transition('visible => hiddenLeft', [animate('300ms ease-in')]),
      transition('visible => hiddenRight', [animate('300ms ease-in')]),
      transition('hiddenLeft => visible', [
        animate(
          '550ms ease-out',
          keyframes([
            style({ transform: 'translateX(-100%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateX(-100%)', opacity: 0, offset: 0.45 }), // ~250ms delay based on prev. discussions for wrapper leave
            style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
      transition('hiddenRight => visible', [
        animate(
          '550ms ease-out',
          keyframes([
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateX(100%)', opacity: 0, offset: 0.45 }), // ~250ms delay
            style({ transform: 'translateX(0)', opacity: 1, offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('homePageContentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms 300ms cubic-bezier(0.23, 1, 0.32, 1)', // 300ms delay
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          style({ opacity: 0, transform: 'translateY(15px)' })
        ),
      ]),
    ]),
    trigger('routeWrapperAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        // This duration should ideally match or slightly exceed the :leave of the component inside the outlet (e.g., AboutComponent's pageAnimation)
        // If AboutComponent's :leave for pageAnimation is 300ms, this should be ~300-350ms.
        animate('350ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  isHomePage = true;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
          this.isHomePage =
            event.urlAfterRedirects === '/' ||
            event.urlAfterRedirects === '/home';
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  navigateWithEffect(path: string): void {
    this.router.navigate([path]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
