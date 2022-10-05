import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsRoutingModule } from '../contacts/contacts-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MenuCardComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MenuCardComponent
  ]
})
export class SharedModule { }
