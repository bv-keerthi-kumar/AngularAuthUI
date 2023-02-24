import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm !: FormGroup;

constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      console.log(1 + "2" + "2");
      console.log(1 + +"2" + "2");
      console.log(1 + -"1" + "2");
      console.log(+"1" + "1" + "2");
      //console.log("A" - "B" + "2");
      //console.log("A" - "B" +2);

      // send obj to database
    }else{

      //throw an error using toaster and with required fields
      console.log("Form is not valid");
      ValidateForm.validateAllFormFields(this.loginForm);
    }

  }


}

