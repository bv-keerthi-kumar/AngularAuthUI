import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm !: FormGroup
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname :['', Validators.required],
      lastname:['', Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password: ['',Validators.required]
    })
  }

  onSignUp(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      // send obj to database
    }else{

      //throw an error using toaster and with required fields
      console.log("Form is not valid");
      ValidateForm.validateAllFormFields(this.signUpForm);
    }

  }


}
