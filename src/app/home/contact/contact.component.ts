import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'footer-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor() { }
  public Name!: string
  public emailAdress!: string
  public mobileNumber!: number
  public emailSubject!: string
  public emailMessage!: string


  log(name: any) {
    console.log(name)
  }


  getErrorsMessages(state: any): string[] {
    let name: string = state.name
    let errors: string[] = []




    if (state.errors) {
      for (let error in state.errors) {
        switch (error) {
          case "required":
            errors.push(`${name} is required `);
            break
          case "pattern":
            if (state.name == "emailAdress") {
              errors.push(`please use email format`)
            } else if (state.name == "mobileNumber") {
              errors.push("please use just numbers")
            }
            else {
              errors.push(`only letters and space`);
            }
            break

        }
      }
    }
    return errors
  }





}
