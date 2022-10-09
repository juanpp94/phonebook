import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactsService } from 'src/app/contacts/service/contacts.service';
import { Contact } from 'src/app/models/contact.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact = {'id':-1,'first_name':'','last_name':'','email':'','telephone':''};
  @Output() messageEvent = new EventEmitter<string>();
  contacts:Contact[] = [];
  message: string = "Hola Mundo!";
  
  constructor(private _contact_service: ContactsService) { }

  ngOnInit(): void {
    
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
   * Method to send to the service the id of the users that is going to be deleted
   * @param id Id of the contact that is going to be deleted
   */
  delete_contact(id:number):void {
    //Modal that shows a message to ensure that the user wants to delete the contact
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this contact!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this._contact_service.delete_contact(id);
        this.messageEvent.emit(this.message)
        Swal.fire(
          'Deleted!',
          'Your contact has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your contact is safe :)',
          'error'
        )
      }
    })
    
    
  }


}
