import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from './service/contacts.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [ContactsService],
})
export class ContactsModule { }
