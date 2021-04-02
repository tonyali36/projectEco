import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup, FormBuilder} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {
  
  register: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      pseudoFormControl: ['', [Validators.required]],
      passwordFormControl: ['', [Validators.required]],
      confirmPasswordFormControl: ['']
    }, { validator: this.checkPasswords });

  }
  
  matcher = new MyErrorStateMatcher();
  
  
    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      const password = group.get('password').value;
      const confirmPassword = group.get('confirmPassword').value;
    
      return password === confirmPassword ? null : { notSame: true }     
    }

}
