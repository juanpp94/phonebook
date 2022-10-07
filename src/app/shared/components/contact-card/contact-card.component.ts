import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts/service/contacts.service';
import { Contact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact = {'id':-1,'first_name':'','last_name':'','email':'','telephone':''};
  contacts:Contact[] = [];
  
  constructor(private _contact_service: ContactsService) { }

  ngOnInit(): void {
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
