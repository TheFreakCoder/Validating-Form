import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editior',
  templateUrl: './profile-editior.component.html',
  styleUrls: ['./profile-editior.component.css']
})
export class ProfileEditiorComponent implements OnInit {

  private profileForm:FormGroup
  constructor(private fb:FormBuilder) { }

  pattern:"[A-Z,a-z,@,.]"
  ngOnInit() {
  this.profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4)]],
    lastName: ['',Validators.required],
    email:['',[Validators.required,Validators.pattern]],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
  });
  }


get firstName() { return this.profileForm.get('firstName'); }
get email() { return this.profileForm.get('email'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
