import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.interface';
import { ContactsService } from '../../service/contacts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  add_contact_form = new FormGroup({
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    telephone: new FormControl('',[Validators.required])
  });
  contact: Contact = {'id':-1,'first_name':'','last_name':'','email':'','telephone':''};

  constructor(private _contacts_service: ContactsService, private router: Router) { }

  ngOnInit(): void {
  }

  send_contact_info() {
    let contact_info = this.add_contact_form.value;
    // console.log(this.add_contact_form.value);
    this.contact.first_name = contact_info.first_name as string;
    this.contact.last_name = contact_info.last_name as string;
    this.contact.email = contact_info.email as string;
    this.contact.telephone = contact_info.telephone as string;
    // console.log(this.contact);
    this._contacts_service.add_contact(this.contact);
    this.add_contact_form.reset();
    Swal.fire("Your contact has been succesfully added","Congratulations!","success");
    this.router.navigate(['/list'])


  }

}
