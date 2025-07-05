import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ClipboardModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private dataService = inject(DataService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router); // Router-i burada inject edirik

  contactData = this.dataService.getContactData();
  private formspreeEndpoint = 'https://formspree.io/f/xeoklnjj';
  submissionStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  emailCopied: boolean = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }

  // constructor-u sildik, çünki router artıq yuxarıda inject olunur

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submissionStatus = 'submitting';
    const formData = this.contactForm.value;

    this.http
      .post(this.formspreeEndpoint, formData, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.submissionStatus = 'success';
          // Formu burada sıfırlamırıq, istifadəçi düyməyə basanda sıfırlayacağıq
        },
        error: () => {
          this.submissionStatus = 'error';
        },
      });
  }

  // YENİ METOD: Formu və statusu sıfırlayır
  resetForm(): void {
    this.contactForm.reset();
    this.submissionStatus = 'idle';
  }

  onCopyEmail() {
    this.emailCopied = !this.emailCopied;
    // Kopyalandıqdan bir müddət sonra ikonu geri qaytarmaq üçün
    setTimeout(() => {
      this.emailCopied = false;
    }, 2000);
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }
}
