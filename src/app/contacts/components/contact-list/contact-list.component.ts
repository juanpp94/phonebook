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
  constructor(private _contact_service: ContactsService) { }

  ngOnInit(): void {
    this.get_contacts();
    console.log(this.contacts);
  }

  get_contacts():Contact[] {
    this.contacts = this._contact_service.get_contacts();
    return this.contacts;
    
  }

  receive_update($event: string) {
    this.message = $event;
    this.get_contacts();
  }

  // delete_contact(id:number):void {
  //   // console.log(id);
  //   Swal.fire({
  //     title: 'Are you sure want to remove?',
  //     text: 'You will not be able to recover this contact!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it'
  //   }).then((result) => {
  //     if (result.value) {
  //       this._contact_service.delete_contact(id);
  //       this.get_contacts();
  //       Swal.fire(
  //         'Deleted!',
  //         'Your contact has been deleted.',
  //         'success'
  //       )
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your contact is safe :)',
  //         'error'
  //       )
  //     }
  //   })
    
    
  // }

}
