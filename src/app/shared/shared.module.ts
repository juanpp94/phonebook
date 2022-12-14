import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsRoutingModule } from '../contacts/contacts-routing.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuCardComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    NavbarComponent,
    MenuCardComponent,
    ContactCardComponent
  ]
})
export class SharedModule { }
