import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from '../auth/components/header/header.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [HeaderComponent],
})

export class CoreModule  {}
