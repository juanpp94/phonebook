import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  id: number = 0;
  contacts: Contact[] = [];
  constructor() { }

  add_contact(contact: Contact) {
    console.log(contact);
    let contacts = [];
    let contacts_bd = JSON.parse(localStorage.getItem('contacts')!)
    if(contacts_bd === null) {
      this.id += 1;
      contact.id = this.id;
      contacts.push(contact);
      this.contacts.push(contact);
      localStorage.setItem('contacts',JSON.stringify(contacts));
    } else {
      console.log(contacts_bd);
      contacts = [...contacts_bd];
      this.id += 1;
      contact.id = this.id;
      contacts.push(contact);
      console.log(contacts);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      
    }
    
    
  }

  get_contacts(): Contact[] {
    let contact_db = JSON.parse(localStorage.getItem('contacts')!);
    let contacts:Contact[];
    if(contact_db === null) {
      contacts = [];
      // return contacts;
    } else {
      console.log("entre aqui");
      contacts = [...contact_db];
      // return contacts;
    }
    return contacts;
  }

  get_contact(id:number):Contact {
    let contacts = this.get_contacts();
    let [contact] = contacts.filter(contact => contact.id === id);
    console.log(contact);
    return contact
  }

  edit_contact(contact: Contact):void {
    let contacts_db = JSON.parse(localStorage.getItem('contacts')!);
    console.log("antes",contacts_db)
    for(let i = 0; i < contacts_db.length; i++) {
      if(contact.id ===  contacts_db[i].id) {
        console.log(contacts_db[i]);
        contacts_db[i].first_name = contact.first_name;
        contacts_db[i].last_name = contact.last_name;
        contacts_db[i].email = contact.email;
        contacts_db[i].telephone = contact.telephone;
        // console.log("despues:",contacts_db);
        localStorage.setItem('contacts',JSON.stringify(contacts_db));
      }
    }
  }

  delete_contact(id: number): void {
    let contacts_db = JSON.parse(localStorage.getItem('contacts')!);

    for (let i = 0; i < contacts_db.length; i++) {
      if (id == contacts_db[i].id) {
        console.log("este es:",contacts_db[i].id)
        contacts_db.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts_db));
        break
      }
    }
    // if(contacts_db !== null) {
    //   let updated_contacts = contacts_db.filter((contact:Contact) => contact.id !== id);
    //   console.log(updated_contacts);
    //   localStorage.setItem('contacts',JSON.stringify(updated_contacts));
      
    // }
  }

  
}
