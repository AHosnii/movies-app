import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactsForm = new FormGroup({
    clientName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    clientAge: new FormControl('', [ Validators.min(10), Validators.max(35)]),
    clientMail: new FormControl('', [Validators.email]),
    messageTitle: new FormControl('', [Validators.pattern(/^[A-Z]/)]),
    messageBody: new FormControl('' ,[Validators.min(10), Validators.max(100)]),
  });

  saveForm() {
    console.log(this.contactsForm);

  }

  constructor() {
  }
}
