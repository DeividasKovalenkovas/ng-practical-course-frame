import {Component, Input, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

@Input()  title: string;
@Input()  isLoggedIn: boolean;

constructor() { }

  ngOnInit() {
  }

}
