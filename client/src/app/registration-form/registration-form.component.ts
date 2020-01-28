import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  RegistrationForm: FormGroup;
  isNotmatched = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.RegistrationForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      confirmpassWord: ['', Validators.required]
    });
  }
  register() {
    this.isNotmatched = false;
    const data = {
      userName: this.RegistrationForm.get('userName').value,
      passWord: this.RegistrationForm.get('passWord').value,

    };
    if (this.RegistrationForm.get('confirmpassWord').value != this.RegistrationForm.get('passWord').value) {
      //alert('Passsword Doesnt Mached')
      this.isNotmatched = true;
    }
    console.log('sd', this.RegistrationForm.get('confirmpassWord').value)
    console.log('data', data)

    if (!this.isNotmatched) {
      this.http.post('http://localhost:3000/user/signup', data).subscribe((response: any) => {

        console.log(response);
        alert('Registration Successful');

      }, (error) => {
        console.log(error);
        alert('Registration Failed');

      });
    }
  }
}
