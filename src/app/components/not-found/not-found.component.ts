import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css',]
})
export class NotFoundComponent implements OnInit {

  constructor(private _router: Router) { }

  navigateToHome() {
    console.log("Navigate to home");
    this._router.navigate(['tasks'])
  }


  ngOnInit(): void {
  }

}
