import { Component } from '@angular/core';

@Component({
  selector: 'footer-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor() { }
  public fullName!: string
  public emailAdress!: string
  public mobileNumber!: number
  public emailSubject!: string
  public emailMessage!: string
}
