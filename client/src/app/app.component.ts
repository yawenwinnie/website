import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}

var prevScrollpos = window.pageYOffset;
console.log("Inside scroll");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      console.log("scolled up");
      document.getElementById("navbar").style.top = "0px";
    } else {
      console.log("scolled down");
      document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
  }