import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.interface';
import { ContactsService } from '../../service/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:Contact[] = [];
  constructor(private _contact_service: ContactsService) { }

  ngOnInit(): void {
    this.get_contacts();
    console.log(this.contacts);
  }

  get_contacts():Contact[] {
    this.contacts = this._contact_service.get_contacts();
    return this.contacts;
    
  }


  delete_contact(id:number):void {
    // console.log(id);
    this._contact_service.delete_contact(id);
    this.get_contacts();
    
  }

}
