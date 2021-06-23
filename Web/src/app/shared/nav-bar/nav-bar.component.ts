import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    var element = document.getElementById(id);

    if (!element)
      this.router.navigate(['/']);
    else
      element.scrollIntoView({ behavior: 'smooth' });
  }

}
