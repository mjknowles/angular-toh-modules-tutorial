import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { FormsModule } from "@angular/forms";
import {HeroRoutingModule} from  './hero-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [HeroComponent]
})
export class HeroModule { }
