import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoPageRoutingModule } from './who-routing.module';

import { WhoPage } from './who.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoPageRoutingModule
  ],
  declarations: [WhoPage]
})
export class WhoPageModule {}
