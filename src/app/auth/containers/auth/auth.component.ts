import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isActive: boolean;

  constructor() { }

  ngOnInit() { this.isActive = true; }

  public toggle(): void { this.isActive = !this.isActive; }

}
