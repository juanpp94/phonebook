import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  id: number = 0; //counter to asign and index to each contact
  page: number = 1; //index to indicate the first page of the pagination
  constructor() { }

  /**
   * Method that add a contact to the localstorage
   * @param contact Contact that is going to be added to the localstorage
   */
  add_contact(contact: Contact):void {
    let contacts = [];
    let contacts_bd = JSON.parse(localStorage.getItem('contacts')!)
    if(contacts_bd === null) {
      this.id += 1;
      contact.id = this.id;
      contacts.push(contact);
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

  /**
   * Function to return the array of contacts from the localstorage
   * @returns Array of contacts saved in the localstorage
   */
  get_contacts(): Contact[] {
    let contact_db = JSON.parse(localStorage.getItem('contacts')!);
    let contacts:Contact[];
    if(contact_db === null) {
      contacts = [];
    } else {
      contacts = [...contact_db];
    }
    return contacts;
  }

  /**
   * Method to get a contact with a specific id
   * @param id id of the user that is going to be deleted
   * @returns contact that is going to be deleted.
   */
  get_contact(id:number):Contact {
    let contacts = this.get_contacts();
    let [contact] = contacts.filter(contact => contact.id === id);
    return contact
  }

  /**
   * Method to edit a contact
   * @param contact contact that whose information is going to be edited.
   */
  edit_contact(contact: Contact):void {
    let contacts_db = JSON.parse(localStorage.getItem('contacts')!);
    for(let i = 0; i < contacts_db.length; i++) {
      if(contact.id ===  contacts_db[i].id) {
        // console.log(contacts_db[i]);
        contacts_db[i].first_name = contact.first_name;
        contacts_db[i].last_name = contact.last_name;
        contacts_db[i].email = contact.email;
        contacts_db[i].telephone = contact.telephone;
        localStorage.setItem('contacts',JSON.stringify(contacts_db));
      }
    }
  }

  /**
   * Method to delete a contact from the localstorage
   * @param id id of the contact that is going to be deleted
   */
  delete_contact(id: number): void {
    let contacts_db = JSON.parse(localStorage.getItem('contacts')!);

    for (let i = 0; i < contacts_db.length; i++) {
      if (id == contacts_db[i].id) {
        contacts_db.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts_db));
        break
      }
    }
  }

  
}
