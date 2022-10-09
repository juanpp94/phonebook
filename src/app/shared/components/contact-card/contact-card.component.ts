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

  get_contacts():Contact[] {
    this.contacts = this._contact_service.get_contacts();
    return this.contacts;
    
  }

  delete_contact(id:number):void {
    // console.log(id);
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


  // delete_contact(id:number):void {
  //   // console.log(id);
  //   this._contact_service.delete_contact(id);
  //   this.messageEvent.emit(this.message)
    
  // }

}
