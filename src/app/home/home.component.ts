import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild("f") 
  form: NgForm;

  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion:''
  }

  onSubmit() {
    this.submitted=true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.userData.secret;
    this.form.reset()
  }

  suggestUsername() {
    const suggestedName = 'superuser';
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }
}
