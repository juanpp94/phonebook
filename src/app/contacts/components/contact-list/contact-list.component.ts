import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.interface';
import { ContactsService } from '../../service/contacts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:Contact[] = [];
  message: string = '';
  page: number = 1;
  constructor(private _contact_service: ContactsService) { }

  ngOnInit(): void {
    this.get_contacts();
    console.log(this.contacts);
  }

  /**
   * Function to get the contacts from the service
   * @returns Array of contacts
   */
  get_contacts():Contact[] {
    this.contacts = this._contact_service.get_contacts();
    return this.contacts;
    
  }

  /**
   * Method by which the component receives a notification from the child component (contact-card)
   *  indicating that a contact has been deleted.
   * @param $event indicates that a user has been deleted
   */
  receive_update($event: string) {
    this.message = $event;
    this.get_contacts();
  }


}
