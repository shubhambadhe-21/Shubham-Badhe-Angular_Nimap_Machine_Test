import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  countries: { name: string}[] = [
    { name: 'United States' },
    { name: 'Canada' },
    { name: 'United Kingdom' },
    { name: 'Australia' },
    { name: 'Germany' },
    { name: 'India' }
  ];
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      photo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      tags: ['', Validators.required],
      newsletter: ['', Validators.required],
    })
  }


  // get firstName(): any { 
  //   return this.form.get('firstName'); 
  // } 

  // get lastName(): any { 
  //   return this.form.get('lastName'); 
  // } 

  // get email(): any { 
  //   return this.form.get('email'); 
  // } 

  // get phone(): any { 
  //   return this.form.get('phone'); 
  // } 

  // get age(): any { 
  //   return this.form.get('age'); 
  // } 
  // get state(): any { 
  //   return this.form.get('state'); 
  // } 

  // get country(): any { 
  //   return this.form.get('country'); 
  // } 

  // get address(): any { 
  //   return this.form.get('address'); 
  // } 

  // get tags(): any { 
  //   return this.form.get('tags'); 
  // } 

  // get newsletter(): any { 
  //   return this.form.get('newsletter'); 
  // } 
  
  onSubmit() {
   this.submitted = true;
   if (this.form.valid) {
    console.log(this.form.value);
   }
  }
}
