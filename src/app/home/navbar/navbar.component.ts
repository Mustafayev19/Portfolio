import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isclicked:boolean=true

  clicked() {
    this.isclicked = !this.isclicked;
  }
  

}
