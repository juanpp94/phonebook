import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.interface';
import { ContactsService } from '../../service/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  int_id: number = -1;
  edit_contact_form = new FormGroup({
    first_name: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+$")] ),
    last_name: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")] ),
    email: new FormControl('',[Validators.required, Validators.email]),
    telephone: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")])

  })
  constructor(private route: ActivatedRoute, private _contact_service: ContactsService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.int_id = parseInt(id!);
    this.set_contact_info(this.int_id);
    
  }

  /**
   * Method to load in the form the current information of the contact
   * @param id Id of the user whose information will be modified
   */
  set_contact_info(id:number): void {
    let contact = this._contact_service.get_contact(id);
    this.edit_contact_form.setValue({first_name: contact.first_name, last_name: contact.last_name, email: contact.email, telephone: contact.telephone});

  }

  /**
   * Method to send to the service the updated information of the contact
   */
  update_contact_info() {
    let contact_info_updated = {id:this.int_id, ...this.edit_contact_form.value} as Contact;
    console.log(contact_info_updated);
    this._contact_service.edit_contact(contact_info_updated);
    this.edit_contact_form.reset();
    this.router.navigate(['/list']);
  }

}
